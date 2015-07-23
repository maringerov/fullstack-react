import alt from '../alt';
import AddCharacterActions from '../actions/AddCharacterActions';

class AddCharacterStore {
  constructor() {
    this.bindActions(AddCharacterActions);
    this.nameValidationState = '';
    this.genderValidationState = '';
    this.name = '';
    this.gender = '';
    this.helpBlock = '';
  }

  onAddCharacterSuccess(successMessage) {
    this.nameValidationState = 'has-success';
  }

  onAddCharacterFail(errorMessage) {
    this.nameValidationState = 'has-error';
    this.helpBlock = errorMessage;
  }

  onUpdateName(event) {
    this.name = event.target.value;
    this.nameValidationState = '';
    this.helpBlock = '';
  }

  onUpdateGender(event) {
    this.gender = event.target.value;
    this.genderValidationState = '';
  }

  onInvalidName() {
    this.nameValidationState = 'has-error';
    this.helpBlock = 'Please enter a character name';
  }

  onInvalidGender() {
    this.genderValidationState = 'has-error';
  }
}

export default alt.createStore(AddCharacterStore);
