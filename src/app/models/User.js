import Sequelize, { Model } from 'sequelize';

class User extends Model {
  // Metodo chamado automatica mente pelo sequelize
  static init(sequelize) {
    // Metodo init está sendo chamado da class Model
    super.init(
      {
        // Colunas do BD que serão inseridas pelo usuario.
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password_hash: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

export default User;
