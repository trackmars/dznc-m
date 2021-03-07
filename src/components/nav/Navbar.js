import React from 'react';
import 'colors.css';
import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useBreakpointValue,
    useDisclosure,
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
  import { Image } from "@chakra-ui/react"
  import logo from '../images/logo.png';
  
  export default function Navbar() {
    const { isOpen, onToggle } = useDisclosure();
    
  
    return (
      <Box bgColor="#282e38!important;">
        <Flex
          color="gray"
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={0.2}
          borderStyle={'solid 1px'}
          borderColor="gray"
          align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <Image src={logo} alt="Our Logo" boxSize="32px"
                objectFit="cover" />
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              color={('gray.800', 'white')}
              fontFamily={'Oswald'}
              fontSize={'xl'} ml={3}>
              DayZKillFeed.gg
            </Text>
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
  
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}
            colors={'white'}>
            <Button
              as={'a'}
              fontSize={'sm'}
              fontWeight={400}
              variant={'link'}
              href={'#'}
              color={'white'}>
              Sign In
            </Button>
            <Button
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'fuchsia'}
              href={'#'}
              _hover={{
                bg: 'pink.300',
              }}>
              Sign Up
            </Button>
          </Stack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    return (
      <Stack direction={'row'} spacing={4} mt={'1'}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  alignContent={'v-mid'}
                  color={'white'}
                  _hover={{
                    textDecoration: 'none',
                    color: ('gray.800', 'white'),
                  }}>
                  {navItem.label}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  fontSize={'sm'}
                  bg={('white', 'gray.800')}
                  p={3}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        color={'white'}
        p={2}
        rounded={'md'}
        _hover={{ bg: ('pink.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={'white'}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
              color="white"
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            color={"white"}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
  interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
  }
  
  const NAV_ITEMS: Array<NavItem> = [
    {
      label: 'Setup Killfeed',
      children: [
        {
          label: 'Subscribe',
          href: '#',
        },
        {
          label: 'Invite',
          href: '#',
        },
      ],
    },
    {
      label: 'Manage Killfeed',
      children: [
        {
          label: 'Nickname',
          href: '#',
        },
        {
          label: 'Prefix',
          href: '#',
        },
        {
          label: 'Logo URL',
          href: '#',
        },
        {
          label: 'Embed Color',
          href: '#',
        },
        {
          label: 'Triggers',
          href: '#',
        },
        {
          label: 'Auto Responses',
          href: '#',
        },
      ],
    },
    {
      label: 'Manage Server',
      children: [
        {
          label: 'Killfeed Channel ID',
          href: '#',
        },
        {
          label: 'NPC Channel ID',
          href: '#',
        },
        {
          label: 'Bounties Channel ID',
          href: '#',
        },
        {
          label: 'Bounty Tracker Channel ID',
          href: '#',
        },
        {
          label: 'Builds Channel ID',
          href: '#',
        },
        {
          label: 'Dismantle Channel ID',
          href: '#',
        },
        {
          label: 'Casino Channel ID',
          href: '#',
        },
        {
          label: 'Economy Channel ID',
          href: '#',
        },
        {
          label: 'Distance Tracker Channel ID',
          href: '#',
        },
        {
          label: 'Heatmaps Channel ID',
          href: '#',
        },
        {
          label: 'Leaderboards Channel ID',
          href: '#',
        },
        {
          label: 'Stats Tracker Channel ID',
          href: '#',
        },
        {
          label: 'Streaks Tracker Channel ID',
          href: '#',
        },
        {
          label: 'Zones Channel ID',
          href: '#',
        },
      ],
    },
  ];