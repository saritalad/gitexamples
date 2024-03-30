USE [FoodDB]
GO

/****** Object:  Table [dbo].[MenuItems]    Script Date: 3/25/2024 9:22:10 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[MenuItems](
	[MenuItemID] [int] IDENTITY(1,1) NOT NULL,
	[RestaurantID] [int] NULL,
	[MenuName] [nvarchar](100) NOT NULL,
	[Price] [decimal](10, 2) NOT NULL,
	[MImage] [varchar](100) NULL,
	[Quantity] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[MenuItemID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[MenuItems]  WITH CHECK ADD FOREIGN KEY([RestaurantID])
REFERENCES [dbo].[Restaurants] ([RestaurantID])
GO


