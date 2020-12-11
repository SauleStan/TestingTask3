from selenium import webdriver
from selenium.webdriver.common.keys import Keys

from selenium.webdriver.support.select import Select
  

PATH = "D:\ChromeDriver\chromedriver.exe"
driver = webdriver.Chrome(PATH)

driver.get("http://127.0.0.1:5500/index.html")


# Fills the input fields with data
fname_input = driver.find_element_by_id("fname")
fname_input.send_keys("first name")

lname_input = driver.find_element_by_id("lname")
lname_input.send_keys("last name")

pid_input = driver.find_element_by_id("pid")
pid_input.send_keys("5132123")

program_input = driver.find_element_by_id("program")
program_object = Select(program_input)
program_object.select_by_value("computer-engineering")

driver.find_element_by_css_selector("input[type='radio'][value='male']").click()

address_input = driver.find_element_by_id("address")
address_input.send_keys("address")

phone_input = driver.find_element_by_id("phone")
phone_input.send_keys("864154545454545")

driver.find_element_by_css_selector("input[type='radio'][value='online']").click()


# Press the submit button
driver.find_element_by_css_selector("button[type='submit']").click()
