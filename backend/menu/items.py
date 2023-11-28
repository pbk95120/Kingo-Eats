# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy


class WeeklyMenu(scrapy.Item):
    menu_location = scrapy.Field()
    menu_day = scrapy.Field()
    menu_time = scrapy.Field()
    menu_name = scrapy.Field()
    menu_price = scrapy.Field()
