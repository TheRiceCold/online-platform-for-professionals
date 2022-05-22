const userMenuItems = (user, router, logout, onOpen) => [
  {
    label: "Profile", 
    handleOnClick: () => 
      router.push(`/professionals/${user.professionalId}`)
  },
  {
    label: "Subscribers", 
    handleOnClick: () => 
      router.push(`/professionals/${user.professionalId}/connections`)
  },
  {
    label: "Field Settings",
    handleOnClick: onOpen
  },
  {
    label: "Calendly Token",
    handleOnClick: onOpen
  },
  {
    label: "Account Settings",
    handleOnClick: onOpen
  },
  "divider",
  {
    label: "Sign out",
    handleOnClick: logout
  }
]

export {userMenuItems}
