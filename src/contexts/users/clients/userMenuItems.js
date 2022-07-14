const userMenuItems = (settingsModal, logout) => [
  {
    label: "Settings",
    handleOnClick: settingsModal.onOpen
  },
  "divider",
  {
    label: "Sign out",
    handleOnClick: logout
  }
]

export {userMenuItems}
