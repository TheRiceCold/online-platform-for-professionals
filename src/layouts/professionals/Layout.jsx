import styles from '@/styles/professionals/Professionals.module.sass'

import {useUsers} from '@/contexts/users/Context'
import ProfessionalOverview from './ProfessionalOverview'
import SearchResultNavigation from './SearchResultNavigation'

const ProfessionalsLayout = () => {
	const { userImg, isLoading } = useUsers('client')

	return (
		<>
			<section className={styles.searchResultsLayout}>
				<SearchResultNavigation img={userImg} isLoading={isLoading} />
				{/*TODO Remove img and isloading when link route is available */}
				<ProfessionalOverview img={userImg} isLoading={isLoading} />
			</section>
		</>
	)
}

export default ProfessionalsLayout
