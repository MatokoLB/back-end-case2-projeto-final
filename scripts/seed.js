import { hashSync } from "bcrypt"

import Page from "../src/DAO/Page.js"
import Product from "../src/DAO/Product.js"
import User from "../src/DAO/User.js"

const models = [
    Page, Product, User
]

const seed = async () => {
    models.forEach(model => model.configurar())

    const page = new Page()
    page.title = 'Sobre'
    page.text = 'Com o aplicativo Class Notes, organizar e revisar suas anotações nunca foi tão fácil. Com uma interface intuitiva e fácil de usar, você pode criar notas em formato de quadro, destacar informações importantes com Tag, adicionar link, arquivos e muito mais. Além disso, você pode acessar suas notas de qualquer lugar, a qualquer momento, pois elas são sincronizadas automaticamente em todos os seus dispositivos. Com o Class Notes, você também pode compartilhar suas notas com colegas de classe, colaboradores ou amigos, tornando a aprendizagem e o trabalho em equipe ainda mais fáceis e produtivos. Não importa se você é um estudante, profissional ou apenas alguém que gosta de manter as ideias organizadas, o Class Notes é a escolha perfeita para ajudá-lo a se manter organizado, produtivo e sempre atualizado. Experimente agora mesmo o Class Notes e comece a aproveitar todos os seus benefícios e vantagens!'
    const pages = [page]

    const products = []
    for (let i=1; i<=3; i++) {
        const prod = new Product()
        prod.title = `Produto ${i}`
        prod.description = `Descrição do produto ${i}`
        products.push(prod)
    }

    const admin = new User()
    admin.email = "admin@admin.com"
    admin.encryptedPassword = hashSync('eusouoadmin', 10)
    const users = [admin]
    
    await Page._seed(pages)
    await Product._seed(products)
    await User._seed(users)
}

seed()