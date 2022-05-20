const userMenuItems = (user, router, logout, onOpen) => [
  {
    label: "Profile", 
    handleOnClick: () => 
      router.push(`/professionals/${user.professionalId}`)
  },
  {
    label: "Connections", 
    handleOnClick: () => 
      router.push(`/professionals/${user.professionalId}/connections`)
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
