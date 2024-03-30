USE [FoodDB]
GO

/****** Object:  Table [dbo].[Payment]    Script Date: 3/25/2024 9:23:09 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Payment](
	[PaymentId] [int] IDENTITY(1,1) NOT NULL,
	[FullName] [varchar](20) NULL,
	[Email] [varchar](20) NULL,
	[Address] [varchar](30) NULL,
	[City] [varchar](20) NULL,
	[State] [varchar](20) NULL,
	[ZipCode] [varchar](20) NULL,
	[NameOnCard] [varchar](20) NULL,
	[CreditCardNumber] [varchar](15) NULL,
	[ExpMonth] [varchar](10) NULL,
	[ExpYear] [varchar](5) NULL,
	[CVV] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[PaymentId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO


