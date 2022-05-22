import styles from '@/styles/users/Professionals.module.sass'

import {useUsers} from '@/users_context'

import UsersSidebar from './UsersSidebar'
import ProfileOverview from './ProfileOverview'

const ProfessionalsLayout = () => {
	const {userImg, isLoading} = useUsers("client")

	return (
		<>
			<section className={styles.searchResultsLayout}>
				<UsersSidebar img={userImg} isLoading={isLoading} />
				{/*TODO Remove img and isloading when link route is available */}
				<ProfileOverview img={userImg} isLoading={isLoading} />
			</section>
		</>
	)
}

export default ProfessionalsLayout
