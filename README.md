# CURSO-CI-DESAFIO-NODEJS-SONARQUBE
    - criar/entrar a pasta node
    
    - Docker Node
        docker run --network netfox --rm -it -v$(pwd)/:/usr/src/app -p 3000:3000 --name nodelocal node:15 bash

         cd /usr/src/app
         cd node
    
    - Gerar projeto node
        npm init

    - Gerar
        npm install jest @types/jest sonar-scanner --only-dev

    - Alterando package.json para
            "scripts": {
                "test": "jest --coverage"
            }   ,

    - executar teste no diretório node
        npm run test
            obs.: irá gerar a pasta "coverage" dentro de node e é o arquivo
            "icov.info" que deve ser enviado para o sonarqube