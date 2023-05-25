import type { language } from '..'

export const en = {
  name: 'en',
  desc: 'English',
  locales: {
    settings: {
      title: 'Settings',
      save: 'Save',
      general: {
        title: 'General',
        requestWithBackend: 'Request With Backend',
        locale: 'Change system language',
      },
      openai: {
        title: 'OpenAI',
        key: '',
      },
      replicate: {},
    },
    conversations: {
      title: 'Conversations',
      add: 'New',
      recent: 'Recents',
      noRecent: 'No recents',
      untitled: 'Untitled',
      confirm: {
        title: 'Delete all messages in this chat',
        desc: 'This action cannot be undone.',
        message: 'Delete this record',
        btn: 'confirm',
        cancel: 'cancel',
      },
      share: {
        link: {
          title: 'Share with link',
          copy: 'Copy Link',
          create: 'Create Link',
        },
        save: 'Save',
        copy: 'Copy Context',
        messages: {
          title: 'Select Message',
          selected: 'Selected Messages',
        },
        tabs: {
          context: 'Share Context',
          image: 'Share Image',
        },
      },
    },
    send: {
      placeholder: 'Enter Something...',
    },
    copyed: 'Copyed!',
  },
} as language
