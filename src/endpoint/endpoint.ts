export default class Endpoint {
  // Versions
  private static versions = ['v1', 'v2'];
  // Current endpoint
  private static currentEndpoint = `api/${this.versions.at(-1)}/`;
  // Authentication
  static authEndpoint = this.currentEndpoint + 'auth';
  // Entities endpoints
  static ratesEndpoint = this.currentEndpoint + 'rates';
  static currenciesEndpoint = this.currentEndpoint + 'currencies';
  static billsEndpoint = this.currentEndpoint + 'bills';
  static monthsEndpoint = this.currentEndpoint + 'months';
  static usersEndpoint = this.currentEndpoint + 'users';
  static studentsEndpoint = this.currentEndpoint + 'students';
  static parentsEndpoint = this.currentEndpoint + 'parents';
  static representativesEndpoint = this.currentEndpoint + 'representatives';
}
