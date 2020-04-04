// tslint:disable
// this is an auto generated file. This will be overwritten

export const syncSuggestions = /* GraphQL */ `
  query SyncSuggestions(
    $filter: ModelSuggestionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSuggestions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        user {
          id
          first_name
          last_name
          avatar
          _version
          _deleted
          _lastChangedAt
          owner
        }
        title
        description
        status
        suggestionscol
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getSuggestion = /* GraphQL */ `
  query GetSuggestion($id: ID!) {
    getSuggestion(id: $id) {
      id
      user {
        id
        first_name
        last_name
        avatar
        suggestions {
          id
          title
          description
          status
          suggestionscol
          _version
          _deleted
          _lastChangedAt
          owner
        }
        tribes {
          id
          name
          symbol
          description
          localization
          tribescol
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
        owner
      }
      title
      description
      status
      suggestionscol
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listSuggestions = /* GraphQL */ `
  query ListSuggestions(
    $filter: ModelSuggestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSuggestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user {
          id
          first_name
          last_name
          avatar
          _version
          _deleted
          _lastChangedAt
          owner
        }
        title
        description
        status
        suggestionscol
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        first_name
        last_name
        avatar
        suggestions {
          id
          title
          description
          status
          suggestionscol
          _version
          _deleted
          _lastChangedAt
          owner
        }
        tribes {
          id
          name
          symbol
          description
          localization
          tribescol
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      first_name
      last_name
      avatar
      suggestions {
        id
        user {
          id
          first_name
          last_name
          avatar
          _version
          _deleted
          _lastChangedAt
          owner
        }
        title
        description
        status
        suggestionscol
        _version
        _deleted
        _lastChangedAt
        owner
      }
      tribes {
        id
        name
        symbol
        description
        localization
        tribescol
        tribes {
          id
          name
          symbol
          description
          localization
          tribescol
          _version
          _deleted
          _lastChangedAt
        }
        users {
          id
          first_name
          last_name
          avatar
          _version
          _deleted
          _lastChangedAt
          owner
        }
        customs {
          id
          title
          description
          _version
          _deleted
          _lastChangedAt
        }
        proverbs {
          id
          title
          meaning
          content
          track
          _version
          _deleted
          _lastChangedAt
        }
        sons {
          id
          title
          lyric
          sons
          _version
          _deleted
          _lastChangedAt
        }
        languages {
          id
          name
          description
          _version
          _deleted
          _lastChangedAt
        }
        names {
          id
          name
          gender
          signification
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        first_name
        last_name
        avatar
        suggestions {
          id
          title
          description
          status
          suggestionscol
          _version
          _deleted
          _lastChangedAt
          owner
        }
        tribes {
          id
          name
          symbol
          description
          localization
          tribescol
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTribes = /* GraphQL */ `
  query SyncTribes(
    $filter: ModelTribeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTribes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        symbol
        description
        localization
        tribescol
        tribes {
          id
          name
          symbol
          description
          localization
          tribescol
          _version
          _deleted
          _lastChangedAt
        }
        users {
          id
          first_name
          last_name
          avatar
          _version
          _deleted
          _lastChangedAt
          owner
        }
        customs {
          id
          title
          description
          _version
          _deleted
          _lastChangedAt
        }
        proverbs {
          id
          title
          meaning
          content
          track
          _version
          _deleted
          _lastChangedAt
        }
        sons {
          id
          title
          lyric
          sons
          _version
          _deleted
          _lastChangedAt
        }
        languages {
          id
          name
          description
          _version
          _deleted
          _lastChangedAt
        }
        names {
          id
          name
          gender
          signification
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getTribe = /* GraphQL */ `
  query GetTribe($id: ID!) {
    getTribe(id: $id) {
      id
      name
      symbol
      description
      localization
      tribescol
      tribes {
        id
        name
        symbol
        description
        localization
        tribescol
        tribes {
          id
          name
          symbol
          description
          localization
          tribescol
          _version
          _deleted
          _lastChangedAt
        }
        users {
          id
          first_name
          last_name
          avatar
          _version
          _deleted
          _lastChangedAt
          owner
        }
        customs {
          id
          title
          description
          _version
          _deleted
          _lastChangedAt
        }
        proverbs {
          id
          title
          meaning
          content
          track
          _version
          _deleted
          _lastChangedAt
        }
        sons {
          id
          title
          lyric
          sons
          _version
          _deleted
          _lastChangedAt
        }
        languages {
          id
          name
          description
          _version
          _deleted
          _lastChangedAt
        }
        names {
          id
          name
          gender
          signification
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      users {
        id
        first_name
        last_name
        avatar
        suggestions {
          id
          title
          description
          status
          suggestionscol
          _version
          _deleted
          _lastChangedAt
          owner
        }
        tribes {
          id
          name
          symbol
          description
          localization
          tribescol
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
        owner
      }
      customs {
        id
        tribe {
          id
          name
          symbol
          description
          localization
          tribescol
          _version
          _deleted
          _lastChangedAt
        }
        title
        description
        _version
        _deleted
        _lastChangedAt
      }
      proverbs {
        id
        tribe {
          id
          name
          symbol
          description
          localization
          tribescol
          _version
          _deleted
          _lastChangedAt
        }
        title
        meaning
        content
        track
        _version
        _deleted
        _lastChangedAt
      }
      sons {
        id
        tribe {
          id
          name
          symbol
          description
          localization
          tribescol
          _version
          _deleted
          _lastChangedAt
        }
        title
        lyric
        sons
        _version
        _deleted
        _lastChangedAt
      }
      languages {
        id
        name
        description
        questions {
          id
          question_template
          answers
          status
          questionscol
          _version
          _deleted
          _lastChangedAt
        }
        alphabets {
          id
          symbols
          sons
          order
          _version
          _deleted
          _lastChangedAt
        }
        dictionaries {
          id
          name
          words
          _version
          _deleted
          _lastChangedAt
        }
        sentences {
          id
          sentence
          translations
          track
          sentencescol
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      names {
        id
        name
        gender
        signification
        _version
        _deleted
        _lastChangedAt
      }
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listTribes = /* GraphQL */ `
  query ListTribes(
    $filter: ModelTribeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTribes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        symbol
        description
        localization
        tribescol
        tribes {
          id
          name
          symbol
          description
          localization
          tribescol
          _version
          _deleted
          _lastChangedAt
        }
        users {
          id
          first_name
          last_name
          avatar
          _version
          _deleted
          _lastChangedAt
          owner
        }
        customs {
          id
          title
          description
          _version
          _deleted
          _lastChangedAt
        }
        proverbs {
          id
          title
          meaning
          content
          track
          _version
          _deleted
          _lastChangedAt
        }
        sons {
          id
          title
          lyric
          sons
          _version
          _deleted
          _lastChangedAt
        }
        languages {
          id
          name
          description
          _version
          _deleted
          _lastChangedAt
        }
        names {
          id
          name
          gender
          signification
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCustoms = /* GraphQL */ `
  query SyncCustoms(
    $filter: ModelCustomFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCustoms(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        tribe {
          id
          name
          symbol
          description
          localization
          tribescol
          _version
          _deleted
          _lastChangedAt
        }
        title
        description
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getCustom = /* GraphQL */ `
  query GetCustom($id: ID!) {
    getCustom(id: $id) {
      id
      tribe {
        id
        name
        symbol
        description
        localization
        tribescol
        tribes {
          id
          name
          symbol
          description
          localization
          tribescol
          _version
          _deleted
          _lastChangedAt
        }
        users {
          id
          first_name
          last_name
          avatar
          _version
          _deleted
          _lastChangedAt
          owner
        }
        customs {
          id
          title
          description
          _version
          _deleted
          _lastChangedAt
        }
        proverbs {
          id
          title
          meaning
          content
          track
          _version
          _deleted
          _lastChangedAt
        }
        sons {
          id
          title
          lyric
          sons
          _version
          _deleted
          _lastChangedAt
        }
        languages {
          id
          name
          description
          _version
          _deleted
          _lastChangedAt
        }
        names {
          id
          name
          gender
          signification
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      title
      description
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listCustoms = /* GraphQL */ `
  query ListCustoms(
    $filter: ModelCustomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustoms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        tribe {
          id
          name
          symbol
          description
          localization
          tribescol
          _version
          _deleted
          _lastChangedAt
        }
        title
        description
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncProverbs = /* GraphQL */ `
  query SyncProverbs(
    $filter: ModelProverbFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProverbs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        tribe {
          id
          name
          symbol
          description
          localization
          tribescol
          _version
          _deleted
          _lastChangedAt
        }
        title
        meaning
        content
        track
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getProverb = /* GraphQL */ `
  query GetProverb($id: ID!) {
    getProverb(id: $id) {
      id
      tribe {
        id
        name
        symbol
        description
        localization
        tribescol
        tribes {
          id
          name
          symbol
          description
          localization
          tribescol
          _version
          _deleted
          _lastChangedAt
        }
        users {
          id
          first_name
          last_name
          avatar
          _version
          _deleted
          _lastChangedAt
          owner
        }
        customs {
          id
          title
          description
          _version
          _deleted
          _lastChangedAt
        }
        proverbs {
          id
          title
          meaning
          content
          track
          _version
          _deleted
          _lastChangedAt
        }
        sons {
          id
          title
          lyric
          sons
          _version
          _deleted
          _lastChangedAt
        }
        languages {
          id
          name
          description
          _version
          _deleted
          _lastChangedAt
        }
        names {
          id
          name
          gender
          signification
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      title
      meaning
      content
      track
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listProverbs = /* GraphQL */ `
  query ListProverbs(
    $filter: ModelProverbFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProverbs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        tribe {
          id
          name
          symbol
          description
          localization
          tribescol
          _version
          _deleted
          _lastChangedAt
        }
        title
        meaning
        content
        track
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSons = /* GraphQL */ `
  query SyncSons(
    $filter: ModelSonFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSons(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        tribe {
          id
          name
          symbol
          description
          localization
          tribescol
          _version
          _deleted
          _lastChangedAt
        }
        title
        lyric
        sons
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getSon = /* GraphQL */ `
  query GetSon($id: ID!) {
    getSon(id: $id) {
      id
      tribe {
        id
        name
        symbol
        description
        localization
        tribescol
        tribes {
          id
          name
          symbol
          description
          localization
          tribescol
          _version
          _deleted
          _lastChangedAt
        }
        users {
          id
          first_name
          last_name
          avatar
          _version
          _deleted
          _lastChangedAt
          owner
        }
        customs {
          id
          title
          description
          _version
          _deleted
          _lastChangedAt
        }
        proverbs {
          id
          title
          meaning
          content
          track
          _version
          _deleted
          _lastChangedAt
        }
        sons {
          id
          title
          lyric
          sons
          _version
          _deleted
          _lastChangedAt
        }
        languages {
          id
          name
          description
          _version
          _deleted
          _lastChangedAt
        }
        names {
          id
          name
          gender
          signification
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      title
      lyric
      sons
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listSons = /* GraphQL */ `
  query ListSons(
    $filter: ModelSonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSons(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        tribe {
          id
          name
          symbol
          description
          localization
          tribescol
          _version
          _deleted
          _lastChangedAt
        }
        title
        lyric
        sons
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncLegends = /* GraphQL */ `
  query SyncLegends(
    $filter: ModelLegendFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLegends(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        surname
        birthdate
        picture
        tribes {
          id
          name
          symbol
          description
          localization
          tribescol
          _version
          _deleted
          _lastChangedAt
        }
        histories {
          id
          title
          content
          start_at
          end_at
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getLegend = /* GraphQL */ `
  query GetLegend($id: ID!) {
    getLegend(id: $id) {
      id
      name
      surname
      birthdate
      picture
      tribes {
        id
        name
        symbol
        description
        localization
        tribescol
        tribes {
          id
          name
          symbol
          description
          localization
          tribescol
          _version
          _deleted
          _lastChangedAt
        }
        users {
          id
          first_name
          last_name
          avatar
          _version
          _deleted
          _lastChangedAt
          owner
        }
        customs {
          id
          title
          description
          _version
          _deleted
          _lastChangedAt
        }
        proverbs {
          id
          title
          meaning
          content
          track
          _version
          _deleted
          _lastChangedAt
        }
        sons {
          id
          title
          lyric
          sons
          _version
          _deleted
          _lastChangedAt
        }
        languages {
          id
          name
          description
          _version
          _deleted
          _lastChangedAt
        }
        names {
          id
          name
          gender
          signification
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      histories {
        id
        title
        content
        start_at
        end_at
        legends {
          id
          name
          surname
          birthdate
          picture
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listLegends = /* GraphQL */ `
  query ListLegends(
    $filter: ModelLegendFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLegends(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        surname
        birthdate
        picture
        tribes {
          id
          name
          symbol
          description
          localization
          tribescol
          _version
          _deleted
          _lastChangedAt
        }
        histories {
          id
          title
          content
          start_at
          end_at
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncHistories = /* GraphQL */ `
  query SyncHistories(
    $filter: ModelHistoryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncHistories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        content
        start_at
        end_at
        legends {
          id
          name
          surname
          birthdate
          picture
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getHistory = /* GraphQL */ `
  query GetHistory($id: ID!) {
    getHistory(id: $id) {
      id
      title
      content
      start_at
      end_at
      legends {
        id
        name
        surname
        birthdate
        picture
        tribes {
          id
          name
          symbol
          description
          localization
          tribescol
          _version
          _deleted
          _lastChangedAt
        }
        histories {
          id
          title
          content
          start_at
          end_at
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listHistorys = /* GraphQL */ `
  query ListHistorys(
    $filter: ModelHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHistorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        content
        start_at
        end_at
        legends {
          id
          name
          surname
          birthdate
          picture
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncNames = /* GraphQL */ `
  query SyncNames(
    $filter: ModelNameFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncNames(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        gender
        signification
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getName = /* GraphQL */ `
  query GetName($id: ID!) {
    getName(id: $id) {
      id
      name
      gender
      signification
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listNames = /* GraphQL */ `
  query ListNames(
    $filter: ModelNameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        gender
        signification
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncLanguages = /* GraphQL */ `
  query SyncLanguages(
    $filter: ModelLanguageFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLanguages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        questions {
          id
          question_template
          answers
          status
          questionscol
          _version
          _deleted
          _lastChangedAt
        }
        alphabets {
          id
          symbols
          sons
          order
          _version
          _deleted
          _lastChangedAt
        }
        dictionaries {
          id
          name
          words
          _version
          _deleted
          _lastChangedAt
        }
        sentences {
          id
          sentence
          translations
          track
          sentencescol
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getLanguage = /* GraphQL */ `
  query GetLanguage($id: ID!) {
    getLanguage(id: $id) {
      id
      name
      description
      questions {
        id
        question_template
        answers
        status
        questionscol
        language {
          id
          name
          description
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      alphabets {
        id
        symbols
        sons
        order
        language {
          id
          name
          description
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      dictionaries {
        id
        name
        words
        language {
          id
          name
          description
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      sentences {
        id
        sentence
        translations
        track
        sentencescol
        language {
          id
          name
          description
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listLanguages = /* GraphQL */ `
  query ListLanguages(
    $filter: ModelLanguageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLanguages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        questions {
          id
          question_template
          answers
          status
          questionscol
          _version
          _deleted
          _lastChangedAt
        }
        alphabets {
          id
          symbols
          sons
          order
          _version
          _deleted
          _lastChangedAt
        }
        dictionaries {
          id
          name
          words
          _version
          _deleted
          _lastChangedAt
        }
        sentences {
          id
          sentence
          translations
          track
          sentencescol
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncQuestions = /* GraphQL */ `
  query SyncQuestions(
    $filter: ModelQuestionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncQuestions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        question_template
        answers
        status
        questionscol
        language {
          id
          name
          description
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getQuestion = /* GraphQL */ `
  query GetQuestion($id: ID!) {
    getQuestion(id: $id) {
      id
      question_template
      answers
      status
      questionscol
      language {
        id
        name
        description
        questions {
          id
          question_template
          answers
          status
          questionscol
          _version
          _deleted
          _lastChangedAt
        }
        alphabets {
          id
          symbols
          sons
          order
          _version
          _deleted
          _lastChangedAt
        }
        dictionaries {
          id
          name
          words
          _version
          _deleted
          _lastChangedAt
        }
        sentences {
          id
          sentence
          translations
          track
          sentencescol
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listQuestions = /* GraphQL */ `
  query ListQuestions(
    $filter: ModelQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        question_template
        answers
        status
        questionscol
        language {
          id
          name
          description
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncAlphabets = /* GraphQL */ `
  query SyncAlphabets(
    $filter: ModelAlphabetFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAlphabets(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        symbols
        sons
        order
        language {
          id
          name
          description
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getAlphabet = /* GraphQL */ `
  query GetAlphabet($id: ID!) {
    getAlphabet(id: $id) {
      id
      symbols
      sons
      order
      language {
        id
        name
        description
        questions {
          id
          question_template
          answers
          status
          questionscol
          _version
          _deleted
          _lastChangedAt
        }
        alphabets {
          id
          symbols
          sons
          order
          _version
          _deleted
          _lastChangedAt
        }
        dictionaries {
          id
          name
          words
          _version
          _deleted
          _lastChangedAt
        }
        sentences {
          id
          sentence
          translations
          track
          sentencescol
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listAlphabets = /* GraphQL */ `
  query ListAlphabets(
    $filter: ModelAlphabetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAlphabets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        symbols
        sons
        order
        language {
          id
          name
          description
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncDictionaries = /* GraphQL */ `
  query SyncDictionaries(
    $filter: ModelDictionaryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDictionaries(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        words
        language {
          id
          name
          description
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getDictionary = /* GraphQL */ `
  query GetDictionary($id: ID!) {
    getDictionary(id: $id) {
      id
      name
      words
      language {
        id
        name
        description
        questions {
          id
          question_template
          answers
          status
          questionscol
          _version
          _deleted
          _lastChangedAt
        }
        alphabets {
          id
          symbols
          sons
          order
          _version
          _deleted
          _lastChangedAt
        }
        dictionaries {
          id
          name
          words
          _version
          _deleted
          _lastChangedAt
        }
        sentences {
          id
          sentence
          translations
          track
          sentencescol
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listDictionarys = /* GraphQL */ `
  query ListDictionarys(
    $filter: ModelDictionaryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDictionarys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        words
        language {
          id
          name
          description
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSentences = /* GraphQL */ `
  query SyncSentences(
    $filter: ModelSentenceFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSentences(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        sentence
        translations
        track
        sentencescol
        language {
          id
          name
          description
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getSentence = /* GraphQL */ `
  query GetSentence($id: ID!) {
    getSentence(id: $id) {
      id
      sentence
      translations
      track
      sentencescol
      language {
        id
        name
        description
        questions {
          id
          question_template
          answers
          status
          questionscol
          _version
          _deleted
          _lastChangedAt
        }
        alphabets {
          id
          symbols
          sons
          order
          _version
          _deleted
          _lastChangedAt
        }
        dictionaries {
          id
          name
          words
          _version
          _deleted
          _lastChangedAt
        }
        sentences {
          id
          sentence
          translations
          track
          sentencescol
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listSentences = /* GraphQL */ `
  query ListSentences(
    $filter: ModelSentenceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSentences(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        sentence
        translations
        track
        sentencescol
        language {
          id
          name
          description
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
