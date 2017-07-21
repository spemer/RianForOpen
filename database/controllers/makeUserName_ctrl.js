// @flow
import User from '../models/user_model';

const makeUserNameCtrl = async (userId: string, userName: string) => {
	try {
		const Userfind = await User.findById(userId);
		const UserInstance = await User.findOne({ userName });
		if (UserInstance) {
			return {
				success: false,
				reason: '이미 존재하는 이름입니다.',
				userName: '',
			};
		}
		const newUserName = await User.update({ _id: userId }, { $set: { userName } });
		return {
			success: true,
			reason: '성공적',
			userName,
		};
	} catch (e) {
		console.log('error In makeUserNameCtrl');
		return {
			success: false,
			reason: '죄송합니다. 서버에서 문제가 발생했습니다.',
			userName: '',
		};
	}
};

export default makeUserNameCtrl;
