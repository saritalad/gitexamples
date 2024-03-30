USE [FoodDB]
GO

/****** Object:  Table [dbo].[Orders]    Script Date: 3/25/2024 9:22:34 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Orders](
	[orderId] [int] IDENTITY(101,1) NOT NULL,
	[menuName] [varchar](20) NULL,
	[price] [int] NULL,
	[Quantity] [int] NULL,
	[TotalPrice] [int] NULL,
	[PaymentId] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[orderId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO


