import styles from '@/styles/Components.module.sass';

import { Box, IconButton, Button, ButtonGroup } from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';

const Pagination = ({ links }) => {
	const pageNumber = (link) => {
		let Y = 'page=';
		let Z = link.slice(link.indexOf(Y) + Y.length);
		return Z;
	};

	const checkPage = (link) => {
		let currentPage = pageNumber(links.self) === pageNumber(link) ? true : false;
		return currentPage;
	};

	{
		/* TODO */
		// Replace links with response[links] from get /professionals/search
		// Button onclicks = axios.get links.url
		// Refactor listing of pages after creating MVP
	}
	return (
		<Box className={styles.paginationContainer}>
			<ButtonGroup className={styles.paginationGroup}>
				<IconButton
					className={styles.pagination}
					variant="outline"
					isRound={true}
					icon={<ArrowLeftIcon />}
					isDisabled={checkPage(links.first)}
				/>
				{links.prev ? (
					<Button className={styles.pagination}>{pageNumber(links.prev)}</Button>
				) : (
					''
				)}
				<Button className={styles.pagination} isActive={true}>
					{pageNumber(links.self)}
				</Button>
				{links.next ? (
					<Button className={styles.pagination}>{pageNumber(links.next)}</Button>
				) : (
					''
				)}
				<IconButton
					className={styles.pagination}
					variant="outline"
					isRound={true}
					icon={<ArrowRightIcon />}
					isDisabled={checkPage(links.last)}
				/>
			</ButtonGroup>
		</Box>
	);
};

export default Pagination;
