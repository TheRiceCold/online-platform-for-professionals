const userMenuItems = (user, router, logout, onOpen) => [
  {
    label: "Profile", 
    handleOnClick: () => 
      router.push(`/clients/${user.clientId}`)
  },
  {
    label: "Settings",
    handleOnClick: onOpen
  },
  "divider",
  {
    label: "Sign out",
    handleOnClick: logout
  }
]

export {userMenuItems}
