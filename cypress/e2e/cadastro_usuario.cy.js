/// <reference types="cypress"/>

import { faker } from '@faker-js/faker';

import commum_page from '../support/pages/commum_page'
import cadastro_usuario_page from '../support/pages/cadastro_usuario_page';

describe('Cadastro de usuário', () => {

    beforeEach('Acessar tela de cadastro de usuário', () => {
        commum_page.acessarCadastroUsuario()
    });
    it('Campo nome vazio', () => {

        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemErro('O campo nome deve ser prenchido')

    });

    it('Campo email vazio', () => {
        
        cadastro_usuario_page.preencheNome('Vinícius Bruneli')
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')
        
    });
    
    it('Campo email invalido', () => {

        cadastro_usuario_page.preencheNome('Vinícius Bruneli') // ou com faker.name
        cadastro_usuario_page.preencheEmail('asfdff') // ou com faker.name
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')
        
    });

    it('Campo senha vazio', () => {

        cadastro_usuario_page.preencheNome('Vinícius Bruneli')
        cadastro_usuario_page.preencheEmail(faker.internet.email()) 
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
        
    });
    
    it('Campo senha invalida', () => {

        cadastro_usuario_page.preencheNome('Vinícius Bruneli') 
        cadastro_usuario_page.preencheEmail(faker.internet.email()) 
        cadastro_usuario_page.preencheSenha('123')
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')

    });

    it.only('Cadastro realizado com sucesso', async () => {

        const namefaker = await faker.person.fullName().replace(/[^a-zA-Z\s]/g, '');

        cadastro_usuario_page.preencheNome(namefaker) 
        cadastro_usuario_page.preencheEmail(faker.internet.email()) 
        cadastro_usuario_page.preencheSenha(faker.internet.password())
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemSucesso(namefaker)
        
    });
    
    
    
});