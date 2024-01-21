import{ Builder,By, Key} from "selenium-webdriver"
import {should} from "chai";
should()

async function adicionarTarefa () {
   
    //Abrir o navegador
    let driver = await new Builder ().forBrowser("firefox").build();

    //Navegar até o site
    await driver.get('https://herziopinto.github.io/lista-de-tarefas/')

    //Adicionar a tarefa -  encontrar o elemento,digitar o texto , apertar enter
    await driver.findElement(By.id("inputTask")).sendKeys("Aprender selenium",Key.RETURN)

    //Assertion / Validação
    let seleniumText = await driver.findElement(By.xpath('/html/body/div/section/ul/li/label')).getText()
    .then(function(value){
        return value
    
    
    });

    seleniumText.should.equal("Aprender selenium")

    //fechar o navegador
    await driver.quit()


}

adicionarTarefa()