pipeline {
    agent any
    environment {
        NEW_VERSION = '1.0'
    }
    stages {
        stage('Clone') {
            steps {
                dir("core") {
                    checkout([$class: 'GitSCM', branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/15110139/test-graphql-server']]])
                }
            }
        }
        stage('Build') {
            steps {
                sh 'ls -al'
                echo "new view ${NEW_VERSION}"
            }
        }

        stage('Deploy') {
            steps {
                echo 'build the Deploy'
            }
        }
    }
}
