class AppointmentHistoryPage {
    getAppointmentHistory() {
      return cy.get('#history');
    }
  }
  
  export default new AppointmentHistoryPage();
  