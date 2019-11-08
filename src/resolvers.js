const bcrypt = require('bcrypt')
const resolvers = {
    Query: {
        async user (root, { id }, { models }) {
              return models.user.findByPk(id)
        },
        async allRecipes (root, args, { models }) {
              return models.recipe.findAll()
        },
        async recipe (root, { id }, { models }) {
              return models.recipe.findByPk(id)
        }
      },
      Mutation: {
        async createUser (root, { name, email, password }, { models }) {
            return models.user.create({
                name,
                email,
                password: await bcrypt.hash(password, 10)
              })
        },
        async createRecipe (root, { user_id, title, ingredients, direction }, { models }) {
            return models.recipe.create({ user_id, title, ingredients, direction })
        }
    },
    User: {
        async recipes (user) {
            return user.getRecipes()
        }
    },
    Recipe: {
        async user (recipe) {
            return recipe.getUser()
        }
    }
}

module.exports = resolvers