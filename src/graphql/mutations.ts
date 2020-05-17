// tslint:disable
// eslint-disable
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      cognitoId
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
            cognitoId
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
          cognitoId
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      cognitoId
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
            cognitoId
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
          cognitoId
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      cognitoId
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
            cognitoId
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
          cognitoId
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
export const createTribe = /* GraphQL */ `
  mutation CreateTribe(
    $input: CreateTribeInput!
    $condition: ModelTribeConditionInput
  ) {
    createTribe(input: $input, condition: $condition) {
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
            cognitoId
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
export const updateTribe = /* GraphQL */ `
  mutation UpdateTribe(
    $input: UpdateTribeInput!
    $condition: ModelTribeConditionInput
  ) {
    updateTribe(input: $input, condition: $condition) {
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
            cognitoId
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
export const deleteTribe = /* GraphQL */ `
  mutation DeleteTribe(
    $input: DeleteTribeInput!
    $condition: ModelTribeConditionInput
  ) {
    deleteTribe(input: $input, condition: $condition) {
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
            cognitoId
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
export const createQuestion = /* GraphQL */ `
  mutation CreateQuestion(
    $input: CreateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    createQuestion(input: $input, condition: $condition) {
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
          cognitoId
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
        cognitoId
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
            cognitoId
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
export const updateQuestion = /* GraphQL */ `
  mutation UpdateQuestion(
    $input: UpdateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    updateQuestion(input: $input, condition: $condition) {
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
          cognitoId
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
        cognitoId
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
            cognitoId
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
export const deleteQuestion = /* GraphQL */ `
  mutation DeleteQuestion(
    $input: DeleteQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    deleteQuestion(input: $input, condition: $condition) {
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
          cognitoId
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
        cognitoId
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
            cognitoId
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
