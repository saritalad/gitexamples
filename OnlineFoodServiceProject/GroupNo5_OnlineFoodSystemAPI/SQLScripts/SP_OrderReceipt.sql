USE [FoodDB]
GO
/****** Object:  StoredProcedure [dbo].[SP_Order_Receipt]    Script Date: 3/25/2024 9:24:54 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

ALTER PROCEDURE [dbo].[SP_Order_Receipt]
AS
BEGIN
	SELECT *
FROM cart
CROSS JOIN  Payment;
END
