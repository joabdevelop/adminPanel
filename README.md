# Painel Admin

## Descrição

O **Painel Admin** é um sistema de painel administrativo desenvolvido em Laravel, projetado para gerenciar usuários, configurações e outras funcionalidades administrativas. Este projeto serve como uma base sólida para aplicações web que necessitam de um painel de controle intuitivo e escalável. Ideal para portfólios de desenvolvimento web, demonstrando habilidades em PHP, Laravel e frontend moderno.

## Funcionalidades

- **Dashboard**: Visão geral do sistema com métricas e navegação rápida.
- **Gerenciamento de Usuários**: Menu completo para usuários.
- **Sistema de Menus**: Navegação dinâmica com submenus e ícones.
- **Interface Responsiva**: Design moderno e adaptável a dispositivos móveis.
- **Cache e Otimização**: Utiliza cache do Laravel para melhor performance.
- **Logs e Monitoramento**: Integração com logs para rastreamento de atividades.

## Tecnologias Utilizadas

- **Backend**: Laravel 12.43.1
- **Frontend**: Blade Templates, Bootstrap, Vite para build de assets
- **PHP**: 8.3.8
- **Outros**: Composer para dependências PHP, NPM para dependências JS

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- PHP 8.3 ou superior
- Composer
- Node.js e NPM

## Instalação e Configuração

Siga os passos abaixo para instalar e configurar o projeto localmente:

### 1. Clone o Repositório

```bash
git clone https://github.com/seu-usuario/painel-admin.git
cd painel-admin
```

### 2. Instale as Dependências PHP

```bash
composer install
```

### 3. Instale as Dependências JavaScript

```bash
npm install
```

### 4. Configure o Ambiente

Copie o arquivo de exemplo de configuração e ajuste as variáveis:

```bash
cp .env.example .env
```

Edite o arquivo `.env` com suas configurações locais, especialmente:

- `APP_NAME=Painel Admin`
- `DB_CONNECTION=sqlite`
- `DB_DATABASE=painel_admin`
- `DB_USERNAME=seu_usuario`
- `DB_PASSWORD=sua_senha`

### 5. Gere a Chave da Aplicação

```bash
php artisan key:generate
```

### 6. Execute as Migrations

```bash
php artisan migrate
```

### 7. (Opcional) Popule o Banco com Dados de Teste

```bash
php artisan db:seed
```

### 8. Compile os Assets

```bash
npm run build
# Ou para desenvolvimento com watch:
npm run dev
```

### 9. Inicie o Servidor

```bash
php artisan serve
```

Acesse o painel em: `http://localhost:8000`

## Uso

### Navegação

O painel possui um menu lateral com itens configuráveis. Cada item pode ter um nome de rota ou URL direta.
A configuração dos itens do menu é feito no arquivo config/adminpanel.php:

Text => Nome do item do menu
Route_neme => Nome da rota
Icon => Nome do icone do bootstrap-icon
Perfil => Pode ser configurado perfils de acessos de forma a mostrar somento o que o usuario tem acesso

```php
'menu' => [
        [
            'text' => 'Home',
            'route_name' => 'dashboard',
            'icon' => 'house',
            'perfil' => [1, 2, 3, 4, 5],
        ],
```

### Personalização

- **Views**: Localizadas em `resources/views/`
- **Controllers**: Em `app/Http/Controllers/`
- **Models**: Em `app/Models/`
- **Routes**: Em `routes/web.php`

## Estrutura do Projeto

```
painel-admin/
├── app/
│   ├── Http/Controllers/
│   ├── Models/
│   └── Providers/
├── database/
│   ├── migrations/
│   └── seeders/
├── public/
├── resources/
│   ├── css/
│   ├── js/
│   └── views/
├── routes/
│   └── web.php
├── storage/
├── tests/
├── vendor/
├── composer.json
├── package.json
├── vite.config.js
└── README.md
```

## Contribuição

Contribuições são bem-vindas! Siga os passos:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## Autor

Desenvolvido por Joabe Souza. Para dúvidas, entre em contato via joabdeveloper@gmail.com.

---
