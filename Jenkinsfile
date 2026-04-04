pipeline {
    agent {
        docker {
            image 'mcr.microsoft.com/playwright:v1.43.0-jammy'
        }
    }

    environment {
        NODE_VERSION = '18'
    }

    stages {

        stage('Checkout') {
            steps {
                git 'https://github.com/your-repo/playwright-framework.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
                sh 'npx playwright install --with-deps'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npx playwright test'
            }
        }

        stage('Generate Allure Report') {
            steps {
                sh 'npx allure generate ./allure-results --clean -o allure-report'
            }
        }

        stage('Archive Reports') {
            steps {
                archiveArtifacts artifacts: 'playwright-report/**', fingerprint: true
                archiveArtifacts artifacts: 'allure-report/**', fingerprint: true
            }
        }
    }

    post {
        success {
            slackSend(
                channel: '#qa-reports',
                message: "✅ Playwright Tests Passed"
            )
        }
        failure {
            slackSend(
                channel: '#qa-reports',
                message: "❌ Playwright Tests Failed - Check Jenkins"
            )
        }
    }
}