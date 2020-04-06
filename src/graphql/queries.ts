// tslint:disable
// eslint-disable
// this is an auto generated file. This will be overwritten

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
        firstName
        lastName
        avatar
        suggestions {
          id
          title
          description
          status
          createdAt
          updatedAt
        }
        tribes {
          id
          tribeId
          userId
          tribeName
          userName
          role
          createdAt
          updatedAt
        }
        questions {
          id
          title
          type
          asset {
            type
            url
            size
            createdAt
            updatedAt
          }
          languageID
          question_template
          answers {
            id
            status
            type
            title
            vote
            createdAt
            updatedAt
          }
          status
          user {
            id
            firstName
            lastName
            avatar
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
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
      firstName
      lastName
      avatar
      suggestions {
        id
        title
        description
        status
        createdAt
        updatedAt
      }
      tribes {
        id
        tribeId
        userId
        tribeName
        userName
        role
        createdAt
        updatedAt
      }
      questions {
        id
        title
        type
        asset {
          type
          url
          size
          createdAt
          updatedAt
        }
        languageID
        question_template
        answers {
          id
          status
          type
          title
          vote
          user {
            id
            firstName
            lastName
            avatar
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          createdAt
          updatedAt
        }
        status
        user {
          id
          firstName
          lastName
          avatar
          suggestions {
            id
            title
            description
            status
            createdAt
            updatedAt
          }
          tribes {
            id
            tribeId
            userId
            tribeName
            userName
            role
            createdAt
            updatedAt
          }
          questions {
            id
            title
            type
            languageID
            question_template
            status
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
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
        firstName
        lastName
        avatar
        suggestions {
          id
          title
          description
          status
          createdAt
          updatedAt
        }
        tribes {
          id
          tribeId
          userId
          tribeName
          userName
          role
          createdAt
          updatedAt
        }
        questions {
          id
          title
          type
          asset {
            type
            url
            size
            createdAt
            updatedAt
          }
          languageID
          question_template
          answers {
            id
            status
            type
            title
            vote
            createdAt
            updatedAt
          }
          status
          user {
            id
            firstName
            lastName
            avatar
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
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
        symbol {
          type
          url
          size
          createdAt
          updatedAt
        }
        description
        country {
          id
          name
          createdAt
          updatedAt
        }
        localization {
          lat
          long
          createdAt
          updatedAt
        }
        tribes {
          id
          name
          symbol {
            type
            url
            size
            createdAt
            updatedAt
          }
          description
          country {
            id
            name
            createdAt
            updatedAt
          }
          localization {
            lat
            long
            createdAt
            updatedAt
          }
          tribes {
            id
            name
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          users {
            id
            tribeId
            userId
            tribeName
            userName
            role
            createdAt
            updatedAt
          }
          customs {
            id
            tribeID
            type
            title
            description
            status
            createdAt
            updatedAt
          }
          proverbs {
            id
            tribeID
            title
            meaning
            content
            track
            createdAt
            updatedAt
          }
          songs {
            id
            tribeID
            title
            lyric
            songs
            createdAt
            updatedAt
          }
          names {
            id
            tribeID
            name
            gender
            signification
            createdAt
            updatedAt
          }
          languages {
            id
            tribeID
            name
            description
            createdAt
            updatedAt
          }
          legends {
            id
            name
            surname
            birthdate
            picture
            tribeIds
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        users {
          id
          tribeId
          userId
          tribeName
          userName
          role
          createdAt
          updatedAt
        }
        customs {
          id
          tribeID
          type
          title
          description
          status
          createdAt
          updatedAt
        }
        proverbs {
          id
          tribeID
          title
          meaning
          content
          track
          createdAt
          updatedAt
        }
        songs {
          id
          tribeID
          title
          lyric
          songs
          createdAt
          updatedAt
        }
        names {
          id
          tribeID
          name
          gender
          signification
          createdAt
          updatedAt
        }
        languages {
          id
          tribeID
          name
          description
          questions {
            id
            title
            type
            languageID
            question_template
            status
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          alphabets {
            id
            languageID
            createdAt
            updatedAt
          }
          dictionaries {
            id
            languageID
            name
            createdAt
            updatedAt
          }
          sentences {
            id
            languageID
            languageName
            title
            translations
            track
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        legends {
          id
          name
          surname
          birthdate
          picture
          tribeIds
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
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
      symbol {
        type
        url
        size
        createdAt
        updatedAt
      }
      description
      country {
        id
        name
        createdAt
        updatedAt
      }
      localization {
        lat
        long
        createdAt
        updatedAt
      }
      tribes {
        id
        name
        symbol {
          type
          url
          size
          createdAt
          updatedAt
        }
        description
        country {
          id
          name
          createdAt
          updatedAt
        }
        localization {
          lat
          long
          createdAt
          updatedAt
        }
        tribes {
          id
          name
          symbol {
            type
            url
            size
            createdAt
            updatedAt
          }
          description
          country {
            id
            name
            createdAt
            updatedAt
          }
          localization {
            lat
            long
            createdAt
            updatedAt
          }
          tribes {
            id
            name
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          users {
            id
            tribeId
            userId
            tribeName
            userName
            role
            createdAt
            updatedAt
          }
          customs {
            id
            tribeID
            type
            title
            description
            status
            createdAt
            updatedAt
          }
          proverbs {
            id
            tribeID
            title
            meaning
            content
            track
            createdAt
            updatedAt
          }
          songs {
            id
            tribeID
            title
            lyric
            songs
            createdAt
            updatedAt
          }
          names {
            id
            tribeID
            name
            gender
            signification
            createdAt
            updatedAt
          }
          languages {
            id
            tribeID
            name
            description
            createdAt
            updatedAt
          }
          legends {
            id
            name
            surname
            birthdate
            picture
            tribeIds
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        users {
          id
          tribeId
          userId
          tribeName
          userName
          role
          createdAt
          updatedAt
        }
        customs {
          id
          tribeID
          type
          title
          description
          status
          createdAt
          updatedAt
        }
        proverbs {
          id
          tribeID
          title
          meaning
          content
          track
          createdAt
          updatedAt
        }
        songs {
          id
          tribeID
          title
          lyric
          songs
          createdAt
          updatedAt
        }
        names {
          id
          tribeID
          name
          gender
          signification
          createdAt
          updatedAt
        }
        languages {
          id
          tribeID
          name
          description
          questions {
            id
            title
            type
            languageID
            question_template
            status
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          alphabets {
            id
            languageID
            createdAt
            updatedAt
          }
          dictionaries {
            id
            languageID
            name
            createdAt
            updatedAt
          }
          sentences {
            id
            languageID
            languageName
            title
            translations
            track
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        legends {
          id
          name
          surname
          birthdate
          picture
          tribeIds
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      users {
        id
        tribeId
        userId
        tribeName
        userName
        role
        createdAt
        updatedAt
      }
      customs {
        id
        tribeID
        type
        title
        description
        status
        createdAt
        updatedAt
      }
      proverbs {
        id
        tribeID
        title
        meaning
        content
        track
        createdAt
        updatedAt
      }
      songs {
        id
        tribeID
        title
        lyric
        songs
        createdAt
        updatedAt
      }
      names {
        id
        tribeID
        name
        gender
        signification
        createdAt
        updatedAt
      }
      languages {
        id
        tribeID
        name
        description
        questions {
          id
          title
          type
          asset {
            type
            url
            size
            createdAt
            updatedAt
          }
          languageID
          question_template
          answers {
            id
            status
            type
            title
            vote
            createdAt
            updatedAt
          }
          status
          user {
            id
            firstName
            lastName
            avatar
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        alphabets {
          id
          languageID
          letters {
            id
            symbol
            order
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        dictionaries {
          id
          languageID
          name
          words {
            id
            title
            meaning
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        sentences {
          id
          languageID
          languageName
          title
          translations
          track
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      legends {
        id
        name
        surname
        birthdate
        picture
        tribeIds
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
        symbol {
          type
          url
          size
          createdAt
          updatedAt
        }
        description
        country {
          id
          name
          createdAt
          updatedAt
        }
        localization {
          lat
          long
          createdAt
          updatedAt
        }
        tribes {
          id
          name
          symbol {
            type
            url
            size
            createdAt
            updatedAt
          }
          description
          country {
            id
            name
            createdAt
            updatedAt
          }
          localization {
            lat
            long
            createdAt
            updatedAt
          }
          tribes {
            id
            name
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          users {
            id
            tribeId
            userId
            tribeName
            userName
            role
            createdAt
            updatedAt
          }
          customs {
            id
            tribeID
            type
            title
            description
            status
            createdAt
            updatedAt
          }
          proverbs {
            id
            tribeID
            title
            meaning
            content
            track
            createdAt
            updatedAt
          }
          songs {
            id
            tribeID
            title
            lyric
            songs
            createdAt
            updatedAt
          }
          names {
            id
            tribeID
            name
            gender
            signification
            createdAt
            updatedAt
          }
          languages {
            id
            tribeID
            name
            description
            createdAt
            updatedAt
          }
          legends {
            id
            name
            surname
            birthdate
            picture
            tribeIds
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        users {
          id
          tribeId
          userId
          tribeName
          userName
          role
          createdAt
          updatedAt
        }
        customs {
          id
          tribeID
          type
          title
          description
          status
          createdAt
          updatedAt
        }
        proverbs {
          id
          tribeID
          title
          meaning
          content
          track
          createdAt
          updatedAt
        }
        songs {
          id
          tribeID
          title
          lyric
          songs
          createdAt
          updatedAt
        }
        names {
          id
          tribeID
          name
          gender
          signification
          createdAt
          updatedAt
        }
        languages {
          id
          tribeID
          name
          description
          questions {
            id
            title
            type
            languageID
            question_template
            status
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          alphabets {
            id
            languageID
            createdAt
            updatedAt
          }
          dictionaries {
            id
            languageID
            name
            createdAt
            updatedAt
          }
          sentences {
            id
            languageID
            languageName
            title
            translations
            track
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        legends {
          id
          name
          surname
          birthdate
          picture
          tribeIds
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
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
        title
        type
        asset {
          type
          url
          size
          createdAt
          updatedAt
        }
        languageID
        question_template
        answers {
          id
          status
          type
          title
          vote
          user {
            id
            firstName
            lastName
            avatar
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          createdAt
          updatedAt
        }
        status
        user {
          id
          firstName
          lastName
          avatar
          suggestions {
            id
            title
            description
            status
            createdAt
            updatedAt
          }
          tribes {
            id
            tribeId
            userId
            tribeName
            userName
            role
            createdAt
            updatedAt
          }
          questions {
            id
            title
            type
            languageID
            question_template
            status
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
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
export const getQuestion = /* GraphQL */ `
  query GetQuestion($id: ID!) {
    getQuestion(id: $id) {
      id
      title
      type
      asset {
        type
        url
        size
        createdAt
        updatedAt
      }
      languageID
      question_template
      answers {
        id
        status
        type
        title
        vote
        user {
          id
          firstName
          lastName
          avatar
          suggestions {
            id
            title
            description
            status
            createdAt
            updatedAt
          }
          tribes {
            id
            tribeId
            userId
            tribeName
            userName
            role
            createdAt
            updatedAt
          }
          questions {
            id
            title
            type
            languageID
            question_template
            status
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
      }
      status
      user {
        id
        firstName
        lastName
        avatar
        suggestions {
          id
          title
          description
          status
          createdAt
          updatedAt
        }
        tribes {
          id
          tribeId
          userId
          tribeName
          userName
          role
          createdAt
          updatedAt
        }
        questions {
          id
          title
          type
          asset {
            type
            url
            size
            createdAt
            updatedAt
          }
          languageID
          question_template
          answers {
            id
            status
            type
            title
            vote
            createdAt
            updatedAt
          }
          status
          user {
            id
            firstName
            lastName
            avatar
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
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
        title
        type
        asset {
          type
          url
          size
          createdAt
          updatedAt
        }
        languageID
        question_template
        answers {
          id
          status
          type
          title
          vote
          user {
            id
            firstName
            lastName
            avatar
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          createdAt
          updatedAt
        }
        status
        user {
          id
          firstName
          lastName
          avatar
          suggestions {
            id
            title
            description
            status
            createdAt
            updatedAt
          }
          tribes {
            id
            tribeId
            userId
            tribeName
            userName
            role
            createdAt
            updatedAt
          }
          questions {
            id
            title
            type
            languageID
            question_template
            status
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
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
