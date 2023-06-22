class MakeAppointmentPage {
    getUsernameField() {
      return cy.get('#txt-username');
    }
  
    getPasswordField() {
      return cy.get('#txt-password');
    }
  
    getLoginButton() {
      return cy.get('#btn-login');
    }
  
    getMakeAppointmentButton() {
      return cy.contains('Make Appointment');
    }
  
    getFacilityDropdown() {
      return cy.get('#combo_facility');
    }
  
    getHospitalReadmissionCheckbox() {
      return cy.get('[name="hospital_readmission"]');
    }
  
    getProgramRadioButton(program) {
      return cy.get(`[id="radio_program_${program.toLowerCase()}"]`);
    }
  
    selectDateFromWidget(date) {
        cy.get('#txt_visit_date').click();
        cy.get('.datepicker-days').contains(date).click();
      }
  
    getCommentField() {
      return cy.get('#txt_comment');
    }
  
    getBookAppointmentButton() {
      return cy.get('#btn-book-appointment');
    }
  
    getConfirmationMessage() {
      return cy.get('#summary');
    }
  
    getFacilityValue() {
      return cy.get('#facility');
    }
  
    getHospitalReadmissionValue() {
      return cy.get('#hospital_readmission');
    }
  
    getProgramValue() {
      return cy.get('#program');
    }
  
    getDateValue() {
      return cy.get('#visit_date');
    }
  
    getCommentValue() {
      return cy.get('#comment');
    }
  }
  
  export default new MakeAppointmentPage();
  