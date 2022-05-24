import Modal from '@/components/overlay/Modal';
import UserConnectionList from '../connections/UserConnectionList';

import { useQuery } from 'react-query';
import { useConnections } from '@/connections_context';

function MyProfessionalsModal({ ...props }) {
	const { getMyProfessionals } = useConnections();

	const { data, isLoading } = useQuery('myProfessionals', getMyProfessionals);

	return (
		<Modal {...props} header="My Professionals">
			<UserConnectionList connections={data} isLoading={isLoading} />
		</Modal>
	);
}

export default MyProfessionalsModal;
