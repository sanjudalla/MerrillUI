package step_Definition;

import java.util.concurrent.TimeUnit;

import junit.framework.Assert;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;




import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.firefox.internal.ProfilesIni;
import org.openqa.selenium.interactions.Actions;



 
public class Test_Steps {
	
	public static WebDriver driver;
	
	@Before({"@Login"})
    public void buildDriver() {
		ProfilesIni profile = new ProfilesIni();
		 FirefoxProfile myprofile = profile.getProfile("selenium");
		driver = new FirefoxDriver(myprofile);
		//System.getProperty("user.dir");
    }

    @After
    public void destroyDriver() {
        driver.quit();
    }

	@Given("^user navigates to (.*)$")
	public void user_is_on_Home_Page(String domain) throws Throwable {
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.get(domain);
	}
 
	@When("^user logs in using Username as \"(.*?)\" and Password \"(.*?)\"$")
	public void user_enters_UserName_and_Password(String username,String password) throws Throwable {
		Thread.sleep(3000);
		driver.findElement(By.name("username")).sendKeys(username); 	 
	    driver.findElement(By.name("password")).sendKeys(password);
		}
	
	@And("^user clicks login button$")
	public void loginButton(){
	    driver.findElement(By.xpath("//form[@id='login']//button")).click();
	}
	
	@Then("login should be successful$")
	public void login_success() throws InterruptedException{
		Thread.sleep(5000);
			driver.findElement(By.xpath("html/body/div[1]/div/div[2]/project-nav/div/div/div[2]/ul/li[1]/a"));
	}
	
 
	@Then("user should not be able to login$")
	public void login_error() throws InterruptedException{
		Thread.sleep(5000);
		driver.getPageSource().equalsIgnoreCase("Log In");
	}
	
	
	@Then("^User LogOut from the Application$")
	public void user_LogOut_from_the_Application() throws Throwable {
		driver.findElement (By.id("c_meun")).click();
		driver.findElement (By.id("c_signout")).click();
	}
	
	
	
	@And("^user is on the search page$")
	public void searchPage(){
		driver.getPageSource().contains("I'm Feeling Lucky");
	}
	
	@When("^I type (.*) in search$")
	public void searchString(String searchString) throws InterruptedException{
		driver.findElement(By.name("q")).sendKeys(searchString);
		Thread.sleep(1000);
	}
	
	@Then("^I see (.*)$")
	public void display(String out) throws InterruptedException{
		Actions a=new Actions(driver);
		a.sendKeys(Keys.RETURN).perform();
		Thread.sleep(1000);
		driver.getPageSource().contains(out);
	}
	 
}