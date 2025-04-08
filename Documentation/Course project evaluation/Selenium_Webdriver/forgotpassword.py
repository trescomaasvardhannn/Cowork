from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time


driver = webdriver.Chrome()
driver.get("https://co-edit-live.netlify.app/")

WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID, "username")))

driver.find_element(By.ID, "username").send_keys("Demo")  #Your username

driver.find_element(By.CSS_SELECTOR, ".MuiBox-root.css-1au10w").click()

print("Forgot password, OTP sent successfully.")

try:
    print("Browser is open. Close it manually when done.")
    while True:  # Infinite loop
        time.sleep(1)  # Prevent high CPU usage
except KeyboardInterrupt:
    print("\nExiting script.")
