// tslint:disable
// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
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
export const onCreateTribe = /* GraphQL */ `
  subscription OnCreateTribe {
    onCreateTribe {
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
export const onUpdateTribe = /* GraphQL */ `
  subscription OnUpdateTribe {
    onUpdateTribe {
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
export const onDeleteTribe = /* GraphQL */ `
  subscription OnDeleteTribe {
    onDeleteTribe {
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
export const onCreateQuestion = /* GraphQL */ `
  subscription OnCreateQuestion($owner: String) {
    onCreateQuestion(owner: $owner) {
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
export const onUpdateQuestion = /* GraphQL */ `
  subscription OnUpdateQuestion($owner: String) {
    onUpdateQuestion(owner: $owner) {
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
export const onDeleteQuestion = /* GraphQL */ `
  subscription OnDeleteQuestion($owner: String) {
    onDeleteQuestion(owner: $owner) {
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
