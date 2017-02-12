/* ============
 * Account Transformer
 * ============
 *
 * The transformer for the account
 */
import Transformer from "./transformer";

export default class AccountTransformer extends Transformer {
  /**
   * Method used to transform a fetched account
   *
   * @param account The fetched account
   *
   * @returns {Object} The transformed account
   */
  static fetch(payload) {
    return {
      id: payload.data.user.id,
      username: payload.data.user.username,
      email: payload.data.user.email,
      firstName: payload.data.user.firstname,
      lastName: payload.data.user.lastname,
    };
  }

  /**
   * Method used to transform a send account
   *
   * @param account The account to be send
   *
   * @returns {Object} The transformed account
   */
  static send(account) {
    return {
      email: account.email,
      first_name: account.firstName,
      last_name: account.lastName,
    };
  }
}
