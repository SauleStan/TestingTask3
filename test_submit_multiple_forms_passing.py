from selenium import webdriver
from selenium.webdriver.common.keys import Keys

from selenium.webdriver.support.select import Select
  

PATH = "D:\ChromeDriver\chromedriver.exe"
driver = webdriver.Chrome(PATH)

driver.get("http://127.0.0.1:5500/index.html")

def firstForm():
    # Fills the input fields with data
    fname_input = driver.find_element_by_id("fname")
    fname_input.send_keys("first name")

    lname_input = driver.find_element_by_id("lname")
    lname_input.send_keys("last name")

    pid_input = driver.find_element_by_id("pid")
    pid_input.send_keys("38703181745")

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

def secondForm():
    # Fills the input fields with data
    fname_input = driver.find_element_by_id("fname")
    fname_input.send_keys("naEmmemee")

    lname_input = driver.find_element_by_id("lname")
    lname_input.send_keys("SUURRRNMANMS")

    pid_input = driver.find_element_by_id("pid")
    pid_input.send_keys("49805020270")

    program_input = driver.find_element_by_id("program")
    program_object = Select(program_input)
    program_object.select_by_value("information-systems")

    driver.find_element_by_css_selector("input[type='radio'][value='female']").click()

    address_input = driver.find_element_by_id("address")
    address_input.send_keys("address1234")

    phone_input = driver.find_element_by_id("phone")
    phone_input.send_keys("86111115454545")

    driver.find_element_by_css_selector("input[type='radio'][value='online']").click()


    # Press the submit button
    driver.find_element_by_css_selector("button[type='submit']").click()

firstForm()
secondForm()