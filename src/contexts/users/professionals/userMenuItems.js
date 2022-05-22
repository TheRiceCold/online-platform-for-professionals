const userMenuItems = (user, router, logout, modals) => {
  const {
    openAccountSettings,
    openCalendlyToken,
    openFieldSettings,
  } = modals

  const prefixPath = (to = "") => 
    `/professionals/${user.professionalId}/${to}`

  return [
    {
      label: "Bookings", 
      handleOnClick: () => 
        router.push(prefixPath("bookings"))
    },
    {
      label: "Field Settings",
      handleOnClick: openFieldSettings
    },
    {
      label: "Calendly Token",
      handleOnClick: openCalendlyToken
    },
    {
      label: "Account Settings",
      handleOnClick: openAccountSettings
    },
    "divider",
    {
      label: "Sign out",
      handleOnClick: logout
    }
  ]
}

export {userMenuItems}
