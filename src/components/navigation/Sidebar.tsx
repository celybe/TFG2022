import React, { ElementType, ReactNode, ReactText } from "react";
import { MdDashboard } from "react-icons/md";
import { MdCalendarToday } from "react-icons/md";
import { MdOutlineChecklist } from "react-icons/md";
import { MdInsertDriveFile } from "react-icons/md";

import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Avatar,
  Spacer,
} from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";

interface LinkItemProps {
  name: string;
  icon: JSX.Element;
  path: string;
}
const LinkItems: Array<LinkItemProps> = [
  {
    name: "Dashboard",
    icon: <Icon as={MdDashboard} w={5} h={5} />,
    path: "dashboard",
  },
  {
    name: "Preferences",
    icon: <Icon as={MdDashboard} w={5} h={5} />,
    path: "preferences",
  },
  {
    name: "Calendar",
    icon: <Icon as={MdCalendarToday} w={5} h={5} />,
    path: "calendar",
  },
  {
    name: "Tasks",
    icon: <Icon as={MdOutlineChecklist} w={5} h={5} />,
    path: "tasks",
  },
  {
    name: "Document",
    icon: <Icon as={MdInsertDriveFile} w={5} h={5} />,
    path: "document",
  },
];
const Sidebar = ({ children }: { children: ReactNode }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }}>{children}</Box>
    </Box>
  );
};

export default Sidebar;

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      bg={useColorModeValue("white", "#001014")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="100%"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />

        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} path={link.path}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: JSX.Element;
  children: ReactText;
  path: string;
}
const NavItem = ({ icon, children, path, ...rest }: NavItemProps) => {
  return (
    <Link
      as={ReachLink}
      to={path}
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="4px"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "#091E1F",
          color: "white",
        }}
        {...rest}
      >
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "#091E1F")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "#091E1F")}
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        border="0px"
        _hover={{ bg: "transparent" }}
        icon={<Icon as={MdDashboard} w={5} h={5} />}
      />
      <Spacer />
      <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
    </Flex>
  );
};
