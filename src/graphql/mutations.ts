// tslint:disable
// this is an auto generated file. This will be overwritten

export const createSuggestion = /* GraphQL */ `
  mutation CreateSuggestion(
    $input: CreateSuggestionInput!
    $condition: ModelSuggestionConditionInput
  ) {
    createSuggestion(input: $input, condition: $condition) {
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
export const updateSuggestion = /* GraphQL */ `
  mutation UpdateSuggestion(
    $input: UpdateSuggestionInput!
    $condition: ModelSuggestionConditionInput
  ) {
    updateSuggestion(input: $input, condition: $condition) {
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
export const deleteSuggestion = /* GraphQL */ `
  mutation DeleteSuggestion(
    $input: DeleteSuggestionInput!
    $condition: ModelSuggestionConditionInput
  ) {
    deleteSuggestion(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createTribe = /* GraphQL */ `
  mutation CreateTribe(
    $input: CreateTribeInput!
    $condition: ModelTribeConditionInput
  ) {
    createTribe(input: $input, condition: $condition) {
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
export const updateTribe = /* GraphQL */ `
  mutation UpdateTribe(
    $input: UpdateTribeInput!
    $condition: ModelTribeConditionInput
  ) {
    updateTribe(input: $input, condition: $condition) {
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
export const deleteTribe = /* GraphQL */ `
  mutation DeleteTribe(
    $input: DeleteTribeInput!
    $condition: ModelTribeConditionInput
  ) {
    deleteTribe(input: $input, condition: $condition) {
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
export const createCustom = /* GraphQL */ `
  mutation CreateCustom(
    $input: CreateCustomInput!
    $condition: ModelCustomConditionInput
  ) {
    createCustom(input: $input, condition: $condition) {
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
export const updateCustom = /* GraphQL */ `
  mutation UpdateCustom(
    $input: UpdateCustomInput!
    $condition: ModelCustomConditionInput
  ) {
    updateCustom(input: $input, condition: $condition) {
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
export const deleteCustom = /* GraphQL */ `
  mutation DeleteCustom(
    $input: DeleteCustomInput!
    $condition: ModelCustomConditionInput
  ) {
    deleteCustom(input: $input, condition: $condition) {
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
export const createProverb = /* GraphQL */ `
  mutation CreateProverb(
    $input: CreateProverbInput!
    $condition: ModelProverbConditionInput
  ) {
    createProverb(input: $input, condition: $condition) {
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
export const updateProverb = /* GraphQL */ `
  mutation UpdateProverb(
    $input: UpdateProverbInput!
    $condition: ModelProverbConditionInput
  ) {
    updateProverb(input: $input, condition: $condition) {
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
export const deleteProverb = /* GraphQL */ `
  mutation DeleteProverb(
    $input: DeleteProverbInput!
    $condition: ModelProverbConditionInput
  ) {
    deleteProverb(input: $input, condition: $condition) {
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
export const createSon = /* GraphQL */ `
  mutation CreateSon(
    $input: CreateSonInput!
    $condition: ModelSonConditionInput
  ) {
    createSon(input: $input, condition: $condition) {
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
export const updateSon = /* GraphQL */ `
  mutation UpdateSon(
    $input: UpdateSonInput!
    $condition: ModelSonConditionInput
  ) {
    updateSon(input: $input, condition: $condition) {
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
export const deleteSon = /* GraphQL */ `
  mutation DeleteSon(
    $input: DeleteSonInput!
    $condition: ModelSonConditionInput
  ) {
    deleteSon(input: $input, condition: $condition) {
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
export const createLegend = /* GraphQL */ `
  mutation CreateLegend(
    $input: CreateLegendInput!
    $condition: ModelLegendConditionInput
  ) {
    createLegend(input: $input, condition: $condition) {
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
export const updateLegend = /* GraphQL */ `
  mutation UpdateLegend(
    $input: UpdateLegendInput!
    $condition: ModelLegendConditionInput
  ) {
    updateLegend(input: $input, condition: $condition) {
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
export const deleteLegend = /* GraphQL */ `
  mutation DeleteLegend(
    $input: DeleteLegendInput!
    $condition: ModelLegendConditionInput
  ) {
    deleteLegend(input: $input, condition: $condition) {
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
export const createHistory = /* GraphQL */ `
  mutation CreateHistory(
    $input: CreateHistoryInput!
    $condition: ModelHistoryConditionInput
  ) {
    createHistory(input: $input, condition: $condition) {
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
export const updateHistory = /* GraphQL */ `
  mutation UpdateHistory(
    $input: UpdateHistoryInput!
    $condition: ModelHistoryConditionInput
  ) {
    updateHistory(input: $input, condition: $condition) {
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
export const deleteHistory = /* GraphQL */ `
  mutation DeleteHistory(
    $input: DeleteHistoryInput!
    $condition: ModelHistoryConditionInput
  ) {
    deleteHistory(input: $input, condition: $condition) {
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
export const createName = /* GraphQL */ `
  mutation CreateName(
    $input: CreateNameInput!
    $condition: ModelNameConditionInput
  ) {
    createName(input: $input, condition: $condition) {
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
export const updateName = /* GraphQL */ `
  mutation UpdateName(
    $input: UpdateNameInput!
    $condition: ModelNameConditionInput
  ) {
    updateName(input: $input, condition: $condition) {
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
export const deleteName = /* GraphQL */ `
  mutation DeleteName(
    $input: DeleteNameInput!
    $condition: ModelNameConditionInput
  ) {
    deleteName(input: $input, condition: $condition) {
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
export const createLanguage = /* GraphQL */ `
  mutation CreateLanguage(
    $input: CreateLanguageInput!
    $condition: ModelLanguageConditionInput
  ) {
    createLanguage(input: $input, condition: $condition) {
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
export const updateLanguage = /* GraphQL */ `
  mutation UpdateLanguage(
    $input: UpdateLanguageInput!
    $condition: ModelLanguageConditionInput
  ) {
    updateLanguage(input: $input, condition: $condition) {
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
export const deleteLanguage = /* GraphQL */ `
  mutation DeleteLanguage(
    $input: DeleteLanguageInput!
    $condition: ModelLanguageConditionInput
  ) {
    deleteLanguage(input: $input, condition: $condition) {
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
export const createQuestion = /* GraphQL */ `
  mutation CreateQuestion(
    $input: CreateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    createQuestion(input: $input, condition: $condition) {
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
export const updateQuestion = /* GraphQL */ `
  mutation UpdateQuestion(
    $input: UpdateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    updateQuestion(input: $input, condition: $condition) {
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
export const deleteQuestion = /* GraphQL */ `
  mutation DeleteQuestion(
    $input: DeleteQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    deleteQuestion(input: $input, condition: $condition) {
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
export const createAlphabet = /* GraphQL */ `
  mutation CreateAlphabet(
    $input: CreateAlphabetInput!
    $condition: ModelAlphabetConditionInput
  ) {
    createAlphabet(input: $input, condition: $condition) {
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
export const updateAlphabet = /* GraphQL */ `
  mutation UpdateAlphabet(
    $input: UpdateAlphabetInput!
    $condition: ModelAlphabetConditionInput
  ) {
    updateAlphabet(input: $input, condition: $condition) {
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
export const deleteAlphabet = /* GraphQL */ `
  mutation DeleteAlphabet(
    $input: DeleteAlphabetInput!
    $condition: ModelAlphabetConditionInput
  ) {
    deleteAlphabet(input: $input, condition: $condition) {
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
export const createDictionary = /* GraphQL */ `
  mutation CreateDictionary(
    $input: CreateDictionaryInput!
    $condition: ModelDictionaryConditionInput
  ) {
    createDictionary(input: $input, condition: $condition) {
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
export const updateDictionary = /* GraphQL */ `
  mutation UpdateDictionary(
    $input: UpdateDictionaryInput!
    $condition: ModelDictionaryConditionInput
  ) {
    updateDictionary(input: $input, condition: $condition) {
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
export const deleteDictionary = /* GraphQL */ `
  mutation DeleteDictionary(
    $input: DeleteDictionaryInput!
    $condition: ModelDictionaryConditionInput
  ) {
    deleteDictionary(input: $input, condition: $condition) {
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
export const createSentence = /* GraphQL */ `
  mutation CreateSentence(
    $input: CreateSentenceInput!
    $condition: ModelSentenceConditionInput
  ) {
    createSentence(input: $input, condition: $condition) {
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
export const updateSentence = /* GraphQL */ `
  mutation UpdateSentence(
    $input: UpdateSentenceInput!
    $condition: ModelSentenceConditionInput
  ) {
    updateSentence(input: $input, condition: $condition) {
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
export const deleteSentence = /* GraphQL */ `
  mutation DeleteSentence(
    $input: DeleteSentenceInput!
    $condition: ModelSentenceConditionInput
  ) {
    deleteSentence(input: $input, condition: $condition) {
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
