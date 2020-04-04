// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateSuggestion = /* GraphQL */ `
  subscription OnCreateSuggestion($owner: String!) {
    onCreateSuggestion(owner: $owner) {
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
export const onUpdateSuggestion = /* GraphQL */ `
  subscription OnUpdateSuggestion($owner: String!) {
    onUpdateSuggestion(owner: $owner) {
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
export const onDeleteSuggestion = /* GraphQL */ `
  subscription OnDeleteSuggestion($owner: String!) {
    onDeleteSuggestion(owner: $owner) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
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
export const onCreateTribe = /* GraphQL */ `
  subscription OnCreateTribe {
    onCreateTribe {
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
export const onUpdateTribe = /* GraphQL */ `
  subscription OnUpdateTribe {
    onUpdateTribe {
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
export const onDeleteTribe = /* GraphQL */ `
  subscription OnDeleteTribe {
    onDeleteTribe {
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
export const onCreateCustom = /* GraphQL */ `
  subscription OnCreateCustom {
    onCreateCustom {
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
export const onUpdateCustom = /* GraphQL */ `
  subscription OnUpdateCustom {
    onUpdateCustom {
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
export const onDeleteCustom = /* GraphQL */ `
  subscription OnDeleteCustom {
    onDeleteCustom {
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
export const onCreateProverb = /* GraphQL */ `
  subscription OnCreateProverb {
    onCreateProverb {
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
export const onUpdateProverb = /* GraphQL */ `
  subscription OnUpdateProverb {
    onUpdateProverb {
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
export const onDeleteProverb = /* GraphQL */ `
  subscription OnDeleteProverb {
    onDeleteProverb {
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
export const onCreateSon = /* GraphQL */ `
  subscription OnCreateSon {
    onCreateSon {
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
export const onUpdateSon = /* GraphQL */ `
  subscription OnUpdateSon {
    onUpdateSon {
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
export const onDeleteSon = /* GraphQL */ `
  subscription OnDeleteSon {
    onDeleteSon {
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
export const onCreateLegend = /* GraphQL */ `
  subscription OnCreateLegend {
    onCreateLegend {
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
export const onUpdateLegend = /* GraphQL */ `
  subscription OnUpdateLegend {
    onUpdateLegend {
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
export const onDeleteLegend = /* GraphQL */ `
  subscription OnDeleteLegend {
    onDeleteLegend {
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
export const onCreateHistory = /* GraphQL */ `
  subscription OnCreateHistory {
    onCreateHistory {
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
export const onUpdateHistory = /* GraphQL */ `
  subscription OnUpdateHistory {
    onUpdateHistory {
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
export const onDeleteHistory = /* GraphQL */ `
  subscription OnDeleteHistory {
    onDeleteHistory {
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
export const onCreateName = /* GraphQL */ `
  subscription OnCreateName {
    onCreateName {
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
export const onUpdateName = /* GraphQL */ `
  subscription OnUpdateName {
    onUpdateName {
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
export const onDeleteName = /* GraphQL */ `
  subscription OnDeleteName {
    onDeleteName {
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
export const onCreateLanguage = /* GraphQL */ `
  subscription OnCreateLanguage {
    onCreateLanguage {
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
export const onUpdateLanguage = /* GraphQL */ `
  subscription OnUpdateLanguage {
    onUpdateLanguage {
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
export const onDeleteLanguage = /* GraphQL */ `
  subscription OnDeleteLanguage {
    onDeleteLanguage {
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
export const onCreateQuestion = /* GraphQL */ `
  subscription OnCreateQuestion {
    onCreateQuestion {
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
export const onUpdateQuestion = /* GraphQL */ `
  subscription OnUpdateQuestion {
    onUpdateQuestion {
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
export const onDeleteQuestion = /* GraphQL */ `
  subscription OnDeleteQuestion {
    onDeleteQuestion {
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
export const onCreateAlphabet = /* GraphQL */ `
  subscription OnCreateAlphabet {
    onCreateAlphabet {
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
export const onUpdateAlphabet = /* GraphQL */ `
  subscription OnUpdateAlphabet {
    onUpdateAlphabet {
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
export const onDeleteAlphabet = /* GraphQL */ `
  subscription OnDeleteAlphabet {
    onDeleteAlphabet {
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
export const onCreateDictionary = /* GraphQL */ `
  subscription OnCreateDictionary {
    onCreateDictionary {
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
export const onUpdateDictionary = /* GraphQL */ `
  subscription OnUpdateDictionary {
    onUpdateDictionary {
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
export const onDeleteDictionary = /* GraphQL */ `
  subscription OnDeleteDictionary {
    onDeleteDictionary {
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
export const onCreateSentence = /* GraphQL */ `
  subscription OnCreateSentence {
    onCreateSentence {
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
export const onUpdateSentence = /* GraphQL */ `
  subscription OnUpdateSentence {
    onUpdateSentence {
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
export const onDeleteSentence = /* GraphQL */ `
  subscription OnDeleteSentence {
    onDeleteSentence {
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
