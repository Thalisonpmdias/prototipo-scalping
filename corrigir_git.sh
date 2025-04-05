8#!/data/data/com.termux/files/usr/bin/bash

echo ">> Limpando a pasta errada..."
rm -rf prototipo-app-scalping

echo ">> Adicionando arquivos da raiz ao Git..."
git add .

echo ">> Commitando as alterações..."
git commit -m "Arquivos finais corrigidos e enviados para a raiz do repositório"

echo ">> Enviando para o GitHub..."
git push origin main

echo ">> Tudo pronto!"

