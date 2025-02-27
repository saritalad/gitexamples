USE [FoodDB]
GO
/****** Object:  StoredProcedure [dbo].[SP_RestaurantMenu]    Script Date: 3/25/2024 9:25:26 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- ================================================
ALTER PROCEDURE [dbo].[SP_RestaurantMenu]
AS
BEGIN
SELECT dbo.Restaurants.RestaurantID, dbo.Restaurants.RName, dbo.MenuItems.MenuItemID, dbo.MenuItems.MenuName AS MenuName, dbo.MenuItems.Price
FROM   dbo.MenuItems INNER JOIN
             dbo.Restaurants ON dbo.MenuItems.RestaurantID = dbo.Restaurants.RestaurantID
	
END
