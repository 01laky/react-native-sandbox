const InitialConfig = {
    modules: {
      todo: {
        render: true,
        requireAuth: false,
        defaultActivated: true,
        container: 'todo',
      },
      login: {
        render: true,
        requireAuth: false,
        defaultActivated: false,
        container: 'login',
      },
    },
};

export default InitialConfig;
