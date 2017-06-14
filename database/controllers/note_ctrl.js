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
		totalCntQuery.user_id = userObjectId;
	}
	if (tags) {
		totalCntQuery.tags = { $elemMatch: { $in: tags } };
	}

  // noteList query ( with userId, tags, after updated_at )
	const detailNotesQuery = {};
	if (userId) {
		detailNotesQuery.user_id = userObjectId;
	}
	if (tags) {
		detailNotesQuery.tags = { $elemMatch: { $in: tags } };
	}
	if (updatedAt) {
		detailNotesQuery.updated_at = { $gt: new Date(updatedAt) };
	}

  // noteList query ( with userId, tags, after updated_at, skipCnt, limitCnt)
	const detailNotesAggreQ = [
    { $match: detailNotesQuery },
    { $sort: { updated_at: 1 } },
    { $skip: skipCnt },
    { $limit: limitCnt },
	];

  // mongodb ( with mongoose ) query excute
	const totalCntPromise = Note.find(totalCntQuery).count().then(count => count);
	const detailNotesPromise = Note.aggregate(detailNotesAggreQ).then((notes) => {
    // last note update_at property
		const cursor = notes.length > 0 && notes[notes.length - 1].updated_at;

    // if there is more note after update_at of last note
		const hasNextQuery = {};
		if (userId) {
			hasNextQuery.user_id = userId;
		}
		if (tags) {
			hasNextQuery.tags = { $elemMatch: { $in: tags } };
		}
		if (updatedAt) {
			hasNextQuery.updated_at = { $gt: new Date(cursor) };
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
    let detailNotesPromise = Note.find(detailNotesQuery).sort({ updated_at : 1 }).then((notes)=>{

            // last note update_at property
            let cursor = notes[notes.length-1].updated_at;
            console.log(cursor);
            // if there is more note after update_at of last note
            let hasNextQuery = {};
                userId ? hasNextQuery.user_id = userId : undefined;
                tags ? hasNextQuery.tags = { $elemMatch : { $in : tags } } : undefined;
                updatedAt ? hasNextQuery.updated_at = { $gt : new Date(cursor) } : undefined;

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

export const basic = () => {};
