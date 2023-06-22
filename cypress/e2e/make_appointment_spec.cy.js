import makeAppointmentPage from '../pageObjects/make_appointment.page';

describe('Make an Appointment', () => {
  it('should make an appointment with correct values', () => {
    cy.visit('https://katalon-demo-cura.herokuapp.com/');

    makeAppointmentPage.getMakeAppointmentButton().click();

    makeAppointmentPage.getUsernameField().type('John Doe');
    makeAppointmentPage.getPasswordField().type('ThisIsNotAPassword');

    makeAppointmentPage.getLoginButton().click();

    makeAppointmentPage.getFacilityDropdown().select('Seoul CURA Healthcare Center');

    makeAppointmentPage.getHospitalReadmissionCheckbox().check();

    makeAppointmentPage.getProgramRadioButton('Medicaid').check();

    makeAppointmentPage.selectDateFromWidget('30');

    makeAppointmentPage.getCommentField().type('CURA Healthcare Service');

    makeAppointmentPage.getBookAppointmentButton().click();

    makeAppointmentPage.getConfirmationMessage().should('contain', 'Appointment Confirmation');
    makeAppointmentPage.getFacilityValue().should('contain', 'Seoul CURA Healthcare Center');
    makeAppointmentPage.getHospitalReadmissionValue().should('contain', 'Yes');
    makeAppointmentPage.getProgramValue().should('contain', 'Medicaid');
    makeAppointmentPage.getDateValue().should('contain', '30');
    makeAppointmentPage.getCommentValue().should('contain', 'CURA Healthcare Service');
  });
});
