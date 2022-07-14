import {
  Link, 
  Popover,
  PopoverContent,
  PopoverTrigger,
  Box, HStack, Stack,
} from "@chakra-ui/react"
import SubLink from "./SubLink"

const Links = ({links}) => (
  <HStack
    mr={8}
    as="nav" spacing={8}
    display={{ base: 'none', md: 'flex' }}
  >
    {links?.map((item, idx) => (
      <Box key={idx}>
        <Popover trigger="hover" placement="bottom-start">
          <PopoverTrigger>
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          </PopoverTrigger>
          {item.children && (
            <PopoverContent p={4} w="12em">
              <Stack>
                {item.children.map((child, idx) => (
                  <SubLink key={idx} {...child}/>
                ))}
              </Stack>
            </PopoverContent>
          )}
        </Popover>
      </Box>
    ))}
  </HStack>
)

export default Links
