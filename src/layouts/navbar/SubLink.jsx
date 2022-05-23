import {
  Icon, Flex, Link, Text,
} from "@chakra-ui/react"
import {ChevronRightIcon} from "@chakra-ui/icons"

const SubLink = ({label, href}) => (
  <Link
    href={href}
    role="group"
    rounded="md"
    display="block"
  >
    <Flex>
      <Text>
        {label}
      </Text>
      <Flex
        transition="all .3s ease"
        transform="translateX(-10px)"
        opacity={0}
        _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
        justify={'flex-start'}
        align={'center'}
      >
        <Icon w={5} h={5} as={ChevronRightIcon} />
      </Flex>
    </Flex>
  </Link>
)

export default SubLink
