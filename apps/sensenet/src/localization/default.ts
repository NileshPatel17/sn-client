const values = {
  addButton: {
    tooltip: 'Create or upload content',
    new: 'New...',
    dialogTitle: 'Create new {0}',
    upload: 'Upload',
    errorGettingAllowedContentTypes: 'There was an error while fetching the allowed content types.',
    contentCreatedNotification: `The content '{0}' has been created succesfully.`,
    errorPostingContentNotification: 'There was an error during content creation',
  },
  commandPalette: {
    title: 'Show Command Palette',
  },
  contentContextMenu: {
    editProperties: 'Edit properties',
    copy: 'Copy',
    move: 'Move',
    delete: 'Delete',
    open: 'Open',
  },
  contentInfoDialog: {
    dialogTitle: 'Info about {0}',
    type: 'Type',
    owner: 'Owner',
    path: 'Path',
    created: 'Created',
    unknownOwner: 'Unknown',
  },
  deleteContentDialog: {
    dialogTitle: 'Really delete content?',
    deletingContent: 'Deleting content...',
    dialogContent: 'You are going to delete the following content:',
    permanentlyLabel: 'Permanently',
    permanentlyHint: "Don't move to trash, delete immediately",
    deleteButton: 'Delete',
    cancelButton: 'Cancel',
    deleteSuccessNotification: `Content '{0}' has been deleted succesfully`,
    deleteMultipleSuccessNotification: `{0} content deleted succesfully`,
    deleteFailedNotification: `There was an error during content deletion.`,
  },
  copyMoveContentDialog: {
    copy: {
      title: `Copy '{0}' to '{1}'`,
      titleMultiple: `Copy {0} items to '{1}'`,
      copyButton: 'Copy',
      cancelButton: 'Cancel',
      details: 'Copy {0} content to {1}',
      copySucceededNotification: '{0} has been copied to {1}',
      copyMultipleSucceededNotification: '{0} items has been copied to {1}',
      copyFailedNotification: 'Failed to copy content {0} to {1}',
      copyMultipleFailedNotification: 'Failed to copy {0} items to {1}',
    },
    move: {
      title: `Move '{0}' to '{1}'`,
      titleMultiple: `Move {0} items to '{1}'`,
      copyButton: 'Move',
      cancelButton: 'Cancel',
      details: 'Move {0} content to {1}',
      copySucceededNotification: '{0} has been moved to {1}',
      copyMultipleSucceededNotification: '{0} items has been moved to {1}',
      copyFailedNotification: 'Failed to move content {0} to {1}',
      copyMultipleFailedNotification: 'Failed to move {0} items to {1}',
    },
  },
  drawer: {
    personalSettingsTitle: 'Edit personal settings',
    personalSettingsSecondaryText: 'Customize the application behavior',
    contentTitle: 'Content',
    contentSecondaryText: 'Explore the content of the repository',
    searchTitle: 'Search',
    searchSecondaryText: 'Execute custom searches, build and save queries',
    usersAndGroupsTitle: 'Users and groups',
    usersAndGroupsSecondaryText: 'Manage users and groups, roles and identities',
    setupTitle: 'Setup',
    setupSecondaryText: 'Configure the sensenet system',
    versionInfoTitle: 'Version Info',
    versionInfoSecondaryText: 'Detailed version information about the current sensenet installation',
    expand: 'Expand',
    collapse: 'Collapse',
  },
  editPropertiesDialog: {
    dialogTitle: 'Edit {0}',
    saveSuccessNotification: `Content '{0}' has been updated.`,
    saveFailedNotification: `There was an error during updating content '{0}'`,
  },
  login: {
    loginTitle: 'Login',
    loginButtonTitle: 'Login',
    userNameLabel: 'UserName',
    userNameHelperText: "Enter the user name you've registered with",
    passwordLabel: 'Password',
    passwordHelperText: 'Enter a matching password for the user',
    repositoryLabel: 'Repository URL',
    repositoryHelperText: 'URL for the repository (e.g.: https://my-sensenet.org)',
    loginFailed: 'Login failed.',
    greetings: 'Greetings, {0}!',
    loggingInTo: 'Logging in to {0}...',
    loginSuccessNotification: `Logged in with user '{0} to repository '{1}'`,
    loginFailedNotification: `Failed to log in with user '{0} to repository '{1}'`,
    loginErrorNotification: `There was an error during login with user '{0} to repository '{1}'`,
  },
  logout: {
    logoutButtonTitle: 'Log out',
    logoutDialogTitle: 'Really log out?',
    loggingOutFrom: 'Logging out from {0}...',
    logoutConfirmText: 'You are logged in to {0} as {1}. Are you sure that you want to leave?',
    logoutSuccessNotification: 'You have logged out from {0}',
    logoutCancel: 'Cancel',
  },
  personalSettings: {
    title: 'Personal settings',
    drawer: 'Options for the left drawer',
    drawerEnable: 'Enable or disable the drawer',
    drawerType: 'Drawer type',
    drawerItems: 'Items enabled on the drawer',
    repositoryTitle: 'A list of visited repositories',
    repositoryUrl: 'The path of the repository, e.g.: https://my-sensenet-repository.org',
    repositoryLoginName: "The last user you've logged in with",
    repositoryDisplayName: `An optional user friendly name to display the repository when you're connected to it`,
    commandPaletteTitle: 'Options for the command palette',
    commandPaletteEnable: 'Enable or disable the command palette',
    commandPaletteWrapQuery: 'A wrapper for all queries executed from the command palette',
    contentTitle: 'Content browsing and basic editing functions',
    contentBrowseType:
      'Choose between a simple list, a two-panel (commander) or a tree + single panel (explorer) style view',
    contentFields: 'Select fields to display',
    platformDependentTitle: 'Platform dependent setting',
    lastRepository: 'The last visited repository URL',
    languageTitle: 'The name of the active language',
    themeTitle: 'Select a dark or a light theme',
    eventLogSize: 'Number of entries to store in the Event Log',
    sendLogWithCrashReports: 'Send log data with crash reports by default',
  },
  repositorySelector: {
    loggedInAs: 'You are currently logged in as {0}',
    notLoggedIn: 'You are not logged in.',
    anotherRepo: 'Another repository',
    typeToFilter: 'Type to filter...',
  },
  textEditor: {
    unsavedChangesWarning: 'You have unsaved changes. Are you sure that you want to leave?',
    save: 'Save',
    reset: 'Reset',
    saveSuccessNotification: `The changes of '{0}' has been saved`,
    saveFailedNotification: `Failed to save changes of content '{0}'`,
  },
  navigationCommandProvider: {
    personalSettingsPrimary: 'Personal Settings',
    personalSettingsSecondary: 'Edit your personal settings',
    contentPrimary: 'Content',
    contentSecondary: 'Explore the content of the Repository',
    searchPrimary: 'Search',
    searchSecondaryText: 'Search in the current repository',
    savedQueriesPrimary: 'Saved queries',
    savedQueriesSecondaryText: 'List of your saved queries and searches in the current repository',
    eventsPrimary: 'Events',
    eventsSecondary: 'Detailed event log with general info, warnings and errors',
  },
  eventList: {
    filter: {
      termTitle: 'Search term',
      termPlaceholder: 'Search term...',
      scopeTitle: 'Scope',
      scopePlaceholder: 'Scope...',
      levelTitle: 'Level',
      levelAll: 'All',
      clear: 'Clear',
      confirmClear: 'Are you sure to clear the log?',
    },
    list: {
      level: 'Level',
      message: 'Message',
      scope: 'Scope',
      relatedContent: 'Related Content',
      date: 'Date',
    },
    details: {
      back: 'Back to list',
    },
  },
  errorBoundary: {
    title: 'Something went wrong :(',
    text: `An error occured and your request couldn't be completed. `,
    reload: 'Reload page',
    reportError: 'Report error',
  },
  errorReport: {
    title: 'Send error report',
    descriptionTitle: 'Description',
    descriptionHelperText: 'Explain what did you do when the error occured',
    send: 'Send',
    cancel: 'Cancel',
    allowLogSending: 'I agree to send events from my log',
    sendingInProgress: 'Sending error report...',
  },
  uploadProgress: {
    contentUploaded: `Content '{0}' has been uploaded succesfully`,
    contentUploadedMultiple: `Finished uploading {count} content.`,
  },
  search: {
    title: 'Search',
    onlyPublic: 'Show public queries only',
    savedQueries: 'Saved queries',
    queryLabel: 'Content Query',
    queryHelperText: 'Enter a content query expression',
    autoFilters: 'AutoFilters',
    openInSearchTitle: 'Open in Search',
    openInSearchDescription: 'Opens the query expression in the Search view',
    saveQuery: 'Save Query',
    newSearch: 'New search',
    noSavedQuery: 'There is no query saved yet.',
    save: 'Save',
    cancel: 'Cancel',
    public: 'Public',
    confirmDeleteQuery: `Are you sure that you want to delete the query '{0}'?`,
  },
  versionInfo: {
    title: 'Version info',
    adminUi: 'Admin UI',
    components: 'Components',
    installedPackages: 'Installed packages',
    assemblies: 'Assemblies',
    showRaw: 'Show raw',
    updateAvailable: 'Update available from {0} to {1}',
    version: 'Version',
    lastOfficialVersion: 'Last official version',
    description: 'Description',
    appVersion: 'Application version',
    branchName: 'Branch name',
    commitHash: 'Commit Hash',
  },
}

export default values