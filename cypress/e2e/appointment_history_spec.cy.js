import makeAppointmentPage from '../pageObjects/make_appointment.page';
import appointmentHistoryPage from '../pageObjects/appointment_history.page';

describe('Appointment History', () => {
  it('should show empty appointment history', () => {
    cy.visit('https://katalon-demo-cura.herokuapp.com/');

    // Click - Make Appointment
    makeAppointmentPage.getMakeAppointmentButton().click();

    // Set username and password fields with the demo account credentials
    makeAppointmentPage.getUsernameField().type('John Doe');
    makeAppointmentPage.getPasswordField().type('ThisIsNotAPassword');

    // Click - Login
    cy.get('#btn-login').click();

    // Click - Menu/Stack/Burger icon
    cy.get('#menu-toggle').click();

    // Validate that the sidebar is active
    cy.get('#sidebar-wrapper').should('have.class', 'active');

    // Click - History
    cy.contains('History').click();

    // Validate that "No appointment" is visible
    appointmentHistoryPage.getAppointmentHistory().should('contain', 'No appointment');
  });
});
