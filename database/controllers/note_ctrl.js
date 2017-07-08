import mongoose from 'mongoose';
import Note from '../models/note_model';

export const getMyNoteListInfo = ({
  userId,
  tags,
  updatedAt,
  skipCnt = 0,
  limitCnt = 20,
}) => {
  // userId casting to ObjectId
	const userObjectId = mongoose.Types.ObjectId(userId);

  // totalCount query
	const totalCntQuery = {};
	if (userId) {
		totalCntQuery.userId = userObjectId;
	}
	if (tags) {
		totalCntQuery.tags = { $elemMatch: { $in: tags } };
	}

  // noteList query ( with userId, tags, after updatedAt )
	const detailNotesQuery = {};
	if (userId) {
		detailNotesQuery.userId = userObjectId;
	}
	if (tags) {
		detailNotesQuery.tags = { $elemMatch: { $in: tags } };
	}
	if (updatedAt) {
		detailNotesQuery.updatedAt = { $gt: new Date(updatedAt) };
	}

  // noteList query ( with userId, tags, after updatedAt, skipCnt, limitCnt)
	const detailNotesAggreQ = [
    { $match: detailNotesQuery },
    { $sort: { updatedAt: 1 } },
    { $skip: skipCnt },
    { $limit: limitCnt },
	];

  // mongodb ( with mongoose ) query excute
	const totalCntPromise = Note.find(totalCntQuery).count().then(count => count);
	const detailNotesPromise = Note.aggregate(detailNotesAggreQ).then((notes) => {
    // last note update_at property
		const cursor = notes.length > 0 && notes[notes.length - 1].updatedAt;

    // if there is more note after update_at of last note
		const hasNextQuery = {};
		if (userId) {
			hasNextQuery.userId = userId;
		}
		if (tags) {
			hasNextQuery.tags = { $elemMatch: { $in: tags } };
		}
		if (updatedAt) {
			hasNextQuery.updatedAt = { $gt: new Date(cursor) };
		}

    // return mongoose query
		return Note.find(hasNextQuery).count().then((lastCount) => {
			let hasNext = false;
			if (lastCount > 0) {
				hasNext = true;
			}

			return {
				notes,
				hasNext,
				cursor,
			};
		});
	});

  /*
    let detailNotesPromise = Note.find(detailNotesQuery).sort({ updatedAt : 1 }).then((notes)=>{

            // last note update_at property
            let cursor = notes[notes.length-1].updatedAt;
            console.log(cursor);
            // if there is more note after update_at of last note
            let hasNextQuery = {};
                userId ? hasNextQuery.userId = userId : undefined;
                tags ? hasNextQuery.tags = { $elemMatch : { $in : tags } } : undefined;
                updatedAt ? hasNextQuery.updatedAt = { $gt : new Date(cursor) } : undefined;

            // return mongoose query
            return Note.find(hasNextQuery).count().then((lastCount)=>{
                let hasNext = false;
                if(lastCount > 0){ hasNext = true; }

                return {
                    notes : notes,
                    hasNext : hasNext,
                    cursor : cursor
                };
            });

        });
*/

  // return promise all ( with all query excute promise )
	return Promise.all([totalCntPromise, detailNotesPromise]).then(
    result => ({
	totalCount: result[0],
	notes: result[1].notes,
	hasNext: result[1].hasNext,
	cursor: result[1].cursor,
}),
    reason => reason,
  );
};


export const updateNoteLike = ({ userId, noteId, isLike }) => {
  // 1) noteId like +1/-1
  // 2) userId like_notes 에 추가/삭제
  // 3) boolean값 리턴
	let upAndDown;
	if (isLike) { // 추가,증가

	} else { // 감소,삭제

	}
	// 따로 publish_tags collection을 두는것도 좋을듯
	// db.users.update({_id : ObjectId("593e422abfc14bfb5722432f")}, { $push : { like_notes : ObjectId("593e6647bfc14bfb57225bbe") }})
	const userLikeNotesP = Note.update().then(result => result);
	const noteLikeUpdateP = Note.update({}, { $inc: { like: +1 } }).then(
    result => result,
  );

	return Promise.all([userLikeNotesP, noteLikeUpdateP]).then((result) => {});
};
