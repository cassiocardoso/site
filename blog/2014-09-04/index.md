---
banner: "/images/posts/banner/2014_less.png"
date: "2014-09-04"
title: "Criando uma estrutura básica de um projeto LESS"
language: "pt"
category: "Coding"
tags: ['css', 'architecture', 'devtips']
draft: false
noIndex: false
path: "arquitetura-css-usando-less"
---

Uma das diversas vantagens de se utilizar um pré-processador de CSS é a possibilidade de se dividir o código em diversos arquivos durante o tempo de desenvolvimento, sem que isso afete a performance após sua compilação.

Dividir seu código em diversos arquivos ajuda a torná-lo mais compreensível e também facilita sua manutenção, pois quando seu chefe pedir aquela alteraçãozinha rápida de cada dia, você saberá exatamente onde procurar.

> “One file to rule them all,
> One file to find them,
> One file to bring them all,
> And in the LESS way merge them.”

- _JRR Tolkien_

## Faça divisões lógicas

Muitas vezes, devido à pressa, falta de interesse ou outros motivos a organização estrutural do projeto acaba sendo deixada de lado, porém ~perder~ 10 minutos com isso no início do projeto, é ganhar horas durante o desenvolvimento, sabendo exatamente onde está a propriedade de um componente específico que você precisa editar.

Sua estrutura não precisa ser completa, com diversos níveis e sub-níveis, aliás, você **deve** evitar isso. Procure manter uma estrutura simples, que irá facilitar a busca e deixará os arquivos bem separados e organizados.

## Estrutura básica

      less/
      |
      |- base/
      |   |- reset.less           # Reset/normalize
      |   |- typography.less      # Typography rules
      |   ...                     # Etc ...
      |
      |- components/
      |   |- buttons.less         # Buttons
      |   |- carousel.less        # Carousel
      |   |- cover.less           # Cover
      |   |- dropdown.less        # Dropdown
      |   |- navigation.less      # Navigation
      |   ...                     # Etc ...
      |
      |- helpers/
      |   |- variables.less       # Less Variables
      |   |- mixins.less          # Less Mixins
      |   |- helpers.less         # Class & Placeholders helpers
      |   ...                     # Etc ...
      |
      |- layout/
      |   |- grid.less            # Grid System
      |   |- header.less          # Header
      |   |- footer.less          # Footer
      |   |- sidebar.less         # Sidebar
      |   |- forms.less           # Forms
      |   ...                     # Etc ...
      |
      |- pages/
      |   |- home.less            # Home specific styles
      |   |- contact.less         # Contact specific styles
      |   ...                     # Etc ...
      |
      |- themes/
      |   |- theme.less           # Default theme
      |   |- admin.less           # Admin theme
      |   ...                     # Etc ...
      |
      |- vendors/
      |   |- bootstrap.less       # Bootstrap
      |   ...                     # Etc ...
      |
      |- main.less                # Less primary file

## Detalhando a estrutura

O nome de cada diretório já deixa bem claro que tipos de arquivos serão armazenados lá dentro. Isso não significa que essa estrutura é imutável, ela pode, e deve, ser alterada seguindo as necessidades do projeto, servindo apenas como um ponto de partida para quem está na situação de: “_mas eu tinha certeza que era essa linha que eu tinha que alterar_”.

### Base

Neste diretório coloco alguns arquivos gerais, como um reset (eu uso o normalize.css), definições de tipografia, esquema de cores, entre outros.

### Components

Aqui ficam alguns componentes que serão utilizados em várias páginas da aplicação como botões, menu de navegação, _dropdowns_, etc.

### Helpers

Serve para armazenar arquivos com _mixins_, funções, variáveis e escalas.

### Layout

Neste diretório ficam armazenados arquivos relacionados ao _layout_ de componentes, como o _header_, _footer_, menu, _sidebar_, formulários e outros.

### Pages

Aqui ficam os arquivos com estilos específicos para determinadas páginas da aplicação, _home_, contato, sobre, etc.

### Themes

Se for o caso de ter diferentes temas para a aplicação, prefiro ter um diretório para manter os estilos em arquivos separados.

### Vendors

Caso a aplicação use CSS de terceiros, eles ficam armazenados neste diretório e ~normalmente~ não são editados.

## Como a mágica acontece?

Eu gosto de deixar apenas um arquivo no diretório raíz, ele que é responsável por importar todos os outros componentes da aplicação.

### Meu setup

Eu tenho uma task configurada no Grunt para compilar um novo arquivo CSS sempre que um arquivo do diretório do LESS, ou de algum de seus sub-diretórios for modificado.

A base é essa, agora cabe a cada um adequar da melhor forma dentro do projeto, mantendo sempre uma coerência e buscando otimizar sua organização.
