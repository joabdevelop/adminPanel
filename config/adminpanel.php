<?php

return [
    'title' => 'Painel Admin',
    'logo_name' => 'PainelAdmin',
    'logo_image' => 'images/logotipo.png',

    'menu' => [
        [
            'text' => 'Home',
            'route_name' => 'dashboard',
            'icon' => 'house',
            'perfil' => [1, 2, 3, 4, 5],
        ],

        [
            'text' => 'Dashboard',
            'icon' => 'bar-chart-line',
            'perfil' => [4, 5],
        ],

        [
            'text' => 'Componentes',
            'icon' => 'motherboard',
            'perfil' => [2, 3, 4, 5],
            'submenu' => [
                [
                    'text' => 'Download',
                    'route_name' => 'dashboard',
                    'icon' => 'cloud-arrow-down',
                    'perfil' => [4, 5],
                ],
            ],
        ],
        [
            'text' => 'Configurações',
            'route_name' => 'dashboard',
            'icon' => 'gear-wide-connected',
            'perfil' => [4, 5],
        ],
    ],
];
